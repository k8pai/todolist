import Head from 'next/head'
import Image from 'next/image'
import { IconContext, icons } from "react-icons";
import { useEffect, useRef, useState } from 'react'
import { RiRadioButtonLine } from 'react-icons/ri';
import { MdDeleteForever, MdPendingActions, MdDownloadDone } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import DoneList from '../components/DoneList';
import TodoList from '../components/TodoList';

export default function Home() {
    const inpList = useRef();
    const inpEl = useRef();
    const defObjc = {
        id: 1,
        name: "default",
        selected: true,
    }

    useEffect(() => {
        const listTemp = localStorage.getItem('Lists');
        const exstTodoList = localStorage.getItem('todoList');
        const exstDoneList = localStorage.getItem('doneList');
        setLists( listTemp ? JSON.parse(listTemp) : [] );
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
        currList.map(el => console.log(el.name));
        // val = checkName(currList, val);
        const prevPresNum = currList.filter(el => el.name.startsWith(val)).length;
        val = prevPresNum ? val+" "+prevPresNum : val;
        const next = [...Lists, {
            id: Lists.length+1,
            name: val,
            selected: true,
        }];
        setLists(next);
        localStorage.setItem(`tasks[${val}]`, JSON.stringify([]))
        localStorage.setItem('Lists', JSON.stringify(next));
        inpList.current.value = "";
        focus(inpList);
    } 
    const deleteList = (name, ind) => {
        localStorage.removeItem(`tasks[${name}]`);
        const todos = Lists.filter((el) => el.id != ind);
        setLists(todos ? todos : []);
        localStorage.setItem('Lists', JSON.stringify(todos));
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
            <div className='w-full max-w-full overflow-x-hidden mx-auto h-full'>
                <div className='bg-slate-500 h-[200px] w-full'>
                    
                </div>
                <div className='w-full mx-auto h-fit'>
                    <div className='p-4 flex justify-center'>
                        <form onSubmit={addLists}>
                            {/* <label for="todo">Insert here</label> */}
                            <input className='form-input tracking-wide capitalize font-semibold p-2 rounded-md px-2 w-5xl' focus='true' type="text" placeholder="what's on your mind?" size="50" ref={inpList}/>
                            {/* <button onClick={(e) => {
                                e.preventDefault();
                                inpEl.current.value = "";
                                document.getElementById("todo").focus();
                            }} ><FiDelete /></button> */}
                            <input className='form-input tracking-wide capitalize font-semibold p-2 rounded-md px-2 w-5xl mx-3' type={"submit"} />
                        </form>
                    </div>
                    <div className='flex overflow-x-scroll'>
                        
                    {
                        Lists.map((item) => (
                            <div key={item.id} className='mt-10 px-4 m-4 max-w-md rounded-md border border-black'>
                                <div className='flex justify-between'>
                                    <h1 className='font-semibold tracking-widest outline-none text-blue-400 text-lg mt-2 p-2' contentEditable="true">{item.name}</h1>
                                    <button className='mr-2' onClick={(e) => {
                                        e.preventDefault();
                                        deleteList(item.name, item.id);
                                    }}><IconContext.Provider value={{ color: "red", size: "1.4em", className: "global-class-name" }}>
                                        <MdDeleteForever />
                                    </IconContext.Provider></button>
                                </div>
                                <TodoList list={item.name} />
                            </div>
                        ))
                    }
                    </div>
                    
                </div>
            </div>
        </>
    )
}
