import Head from 'next/head'
import Image from 'next/image'
import { IconContext, icons } from "react-icons";
import { useEffect, useRef, useState } from 'react'
import { RiRadioButtonLine } from 'react-icons/ri';
import { MdDeleteForever, MdPendingActions, MdDownloadDone } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import DoneList from '../components/DoneList';
import TodoList from '../components/TodoList';
import NavBar from '../components/NavBar';

export default function Home() {
    const inpList = useRef();
    const inpEl = useRef();

    useEffect(() => {
        const listTemp = localStorage.getItem('Lists');
        const exstTodoList = localStorage.getItem('todoList');
        const exstDoneList = localStorage.getItem('doneList');
        setLists( listTemp ? JSON.parse(listTemp) : [{id: (Math.floor(Math.random()*100)+"-"+Math.floor(Math.random()*10)+"-"+Math.floor(Math.random()*1000)), name: "default", selected: true}] );
        setTodoList( exstTodoList ? JSON.parse(exstTodoList) : [] );
        setDoneList( exstDoneList ? JSON.parse(exstDoneList) : [] );
    }, []);
    const [Lists, setLists] = useState([]);
    const [todoList, setTodoList] = useState([]);
    const [doneList, setDoneList] = useState([]);

    const addLists = (e) => {
        e.preventDefault();
        var val = (inpList.current.value == "") ? "new list "+Lists.length : inpList.current.value;
        var listTemp = localStorage.getItem('Lists');
        const currList = listTemp ? JSON.parse(listTemp) : [];
        const data = {
            id: (Math.floor(Math.random()*100)+"-"+Math.floor(Math.random()*10)+"-"+Math.floor(Math.random()*1000)),
            name: val,
            selected: false,
        }
        const next = [...Lists, data];
        setLists(next);
        localStorage.setItem(`tasks[${data.id}]`, JSON.stringify([]))
        localStorage.setItem('Lists', JSON.stringify(next));
        inpList.current.value = "";
        focus(inpList);
    } 
    const deleteList = (name, ind) => {
        localStorage.removeItem(`tasks[${ind}]`);
        const todos = Lists.filter((el) => el.id != ind);
        setLists(todos ? todos : []);
        localStorage.setItem('Lists', JSON.stringify(todos));
    }
    const changeName = () => {
        console.log(document.getElementById("listName").innerHTML);
        // const val = document.getElementById("listName").value;
        // 
    }

    // const addTodo = (name) => {
    //     // e.preventDefault();
    //     const val = inpEl.current.value;
    //     if(val != "") {
    //         const next = [{
    //             id: `${name}`.length+1,
    //             name: val,
    //             done: false,
    //         }, ...todoList];
    //         setTodoList(next);
    //         localStorage.setItem('todoList', JSON.stringify(next));
    //         inpEl.current.value = "";
    //         focus(inpEl);
    //     }
    // }
    // const deleteItem = (ind) => {
    //     const todos = todoList.filter((el, id) => id != ind);
    //     setTodoList(todos ? todos : []);
    //     localStorage.setItem('todoList', JSON.stringify(todos));
    // }
    // const deleteDoneItem = (ind) => {
    //     const todos = doneList.filter((el, id) => id != ind);
    //     setDoneList(todos ? todos : []);
    //     localStorage.setItem('doneList', JSON.stringify(todos));
    // }
    // const moveToDone = (ind) => {
    //     console.log(doneList);
    //     const todos = todoList.filter((el, id) => id != ind);
    //     setTodoList(todos ? todos : []);
    //     localStorage.setItem('todoList', JSON.stringify(todos));
    //     const next = [ todoList[ind], ...doneList];
    //     setDoneList(next ? next : []);
    //     localStorage.setItem('doneList', JSON.stringify(next));
    // }
    // const moveToTodo = (ind) => {
    //     const todos = doneList.filter((el, id) => id != ind);
    //     setDoneList(todos ? todos : []);
    //     localStorage.setItem('doneList', JSON.stringify(todos));
    //     const next = [...todoList, doneList[ind]];
    //     setTodoList(next ? next : []);
    //     localStorage.setItem('todoList', JSON.stringify(next));
    // }

    return (
        <>
            <div className='w-full max-w-full overflow-x-hidden mx-auto h-screen bg-gray-200'>
                <div className='bg-slate-500 h-[200px] w-full'>
                    <NavBar />
                </div>
                <div className='w-full mx-auto h-fit'>
                    <div className='p-4 flex justify-center'>
                        <form onSubmit={addLists}>
                            {/* <label for="todo">Insert here</label> */}
                            <input className='form-input tracking-wide capitalize font-semibold p-2 rounded-md px-2 w-5xl' focus='true' type="text" placeholder="Start a new list?" size="50" ref={inpList}/>
                            {/* <button onClick={(e) => {
                                e.preventDefault();
                                inpEl.current.value = "";
                                document.getElementById("todo").focus();
                            }} ><FiDelete /></button> */}
                            <input className='form-input tracking-wide capitalize font-semibold p-2 rounded-md px-2 w-5xl mx-3 opacity-0' type={"submit"} />
                        </form>
                    </div>
                    <div className='flex justify-center flex-wrap'>
                    {Lists.map((item) => (
                        <div key={item.id} className='mt-10 px-4 m-4 h-fit max-w-2xl rounded-md border border-black shadow-lg shadow-slate-500'>
                            <div className='group flex justify-between'>
                                <h1 id='listName' className='uppercase font-semibold tracking-widest outline-none text-blue-400 text-lg mt-2 p-2'>{item.name}</h1>
                                <button className='mr-2 transition duration-150 opacity-0 group-hover:opacity-60 hover:opacity-100' onClick={(e) => {
                                    e.preventDefault();
                                    deleteList(item.name, item.id);
                                }}><IconContext.Provider value={{ color: "red", size: "1.4em", className: "global-class-name" }}>
                                    <MdDeleteForever />
                                </IconContext.Provider></button>
                            </div>
                            <TodoList list={item} />
                        </div>
                    ))}
                    <button className='h-12 w-12 rounded-full bg-zinc-300 m-4 mt-10' onClick={(e) => {
                        addLists(e);
                    }}>+</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
