import Head from 'next/head'
import Image from 'next/image'
import { IconContext } from "react-icons";
import { useEffect, useRef, useState } from 'react'
import { RiRadioButtonLine } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md'

export default function Home() {
    const inpEl = useRef();
    
    useEffect(() => {
        const exstTodoList = localStorage.getItem('todoList');
        const exstDoneList = localStorage.getItem('doneList');
        setTodoList( exstTodoList ? JSON.parse(exstTodoList) : [] );
        setDoneList( exstDoneList ? JSON.parse(exstDoneList) : [] );
    }, []);
    const [todoList, setTodoList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    
    const addTodo = (e) => {
        e.preventDefault();
        const val = inpEl.current.value;
        if(val != "") {
            const next = [...todoList, inpEl.current.value];
            setTodoList(next);
            localStorage.setItem('todoList', JSON.stringify(next));
            inpEl.current.value = "";
            focus(inpEl);
        }
    }
    const deleteItem = (ind) => {
        const todos = todoList.filter((el, id) => id != ind);
        setTodoList(todos ? todos : []);
        localStorage.setItem('todoList', JSON.stringify(todos));
    }
    const deleteDoneItem = (ind) => {
        const todos = doneList.filter((el, id) => id != ind);
        setDoneList(todos ? todos : []);
        localStorage.setItem('doneList', JSON.stringify(todos));
    }
    const moveToDone = (ind) => {
        console.log(doneList);
        const todos = todoList.filter((el, id) => id != ind);
        setTodoList(todos ? todos : []);
        localStorage.setItem('todoList', JSON.stringify(todos));
        const next = [...doneList, todoList[ind]];
        setDoneList(next ? next : []);
        localStorage.setItem('doneList', JSON.stringify(next));
    }
    const moveToTodo = (ind) => {
        const todos = doneList.filter((el, id) => id != ind);
        setDoneList(todos ? todos : []);
        localStorage.setItem('doneList', JSON.stringify(todos));
        const next = [...todoList, doneList[ind]];
        setTodoList(next ? next : []);
        localStorage.setItem('todoList', JSON.stringify(next));
    }

    return (
        <>
            <div className='w-full mx-auto h-full'>
                <div className='bg-slate-500 h-[200px] w-full'>

                </div>
                <div className='max-w-4xl mx-auto h-fit'>
                    <div className='p-4 flex justify-center'>
                        <form onSubmit={addTodo}>
                            {/* <label for="todo">Insert here</label> */}
                            <input className='form-input tracking-wide capitalize font-semibold p-2 rounded-md px-2 w-5xl' focus='true' type="text" placeholder="what's on your mind?" size="50" id="todo" name="todo" ref={inpEl}/>
                            {/* <button onClick={(e) => {
                                e.preventDefault();
                                inpEl.current.value = "";
                                document.getElementById("todo").focus();
                            }} ><FiDelete /></button> */}
                            <input className='form-input tracking-wide capitalize font-semibold p-2 rounded-md px-2 w-5xl mx-3' type={"submit"} />
                        </form>
                    </div>
                    
                    <div className='mt-10 px-4 max-w-4xl mx-auto'>
                        <ul className='p-5 list-none text-md font-medium font-sans tracking-wide capitalize'>
                        <h1>to-do List</h1>
                            {todoList.map((el, id) => (
                                <div className='flex justify-evenly items-center select-none' key={id}>
                                    {/* <input type="radio" name='todo' className="rounded-md text-pink-500 mx-4 h-4 w-4"/> */}
                                    <button className='mr-2' onClick={(e) => {
                                        e.preventDefault();
                                        moveToDone(id);
                                    }}><IconContext.Provider value={{ color: "gray", size: "1.4em", className: "global-class-name" }}>
                                        <RiRadioButtonLine />
                                    </IconContext.Provider></button>
                                    <li className='px-px py-2 rounded-md my-px'>{el}</li>
                                    <span className='flex-1'></span>
                                    <button className='mr-2' onClick={(e) => {
                                        e.preventDefault();
                                        deleteItem(id);
                                    }}><IconContext.Provider value={{ color: "red", size: "1.4em", className: "global-class-name" }}>
                                        <MdDeleteForever />
                                    </IconContext.Provider>
                                    </button>
                                </div>
                            ))}
                            
                        </ul>
                        <ul className='p-5 list-none text-md font-medium font-sans tracking-wide capitalize'>
                            <div className=''>
                                <h1>done List</h1>
                            </div>
                            {doneList.map((el, id) => (
                                <div className='flex items-center select-none' key={id}>
                                    <button className='mr-2' onClick={(e) => {
                                        e.preventDefault();
                                        moveToTodo(id);
                                    }}><IconContext.Provider value={{ color: "green", size: "1.4em", className: "global-class-name" }}>
                                        <RiRadioButtonLine />
                                    </IconContext.Provider></button>
                                    <li className='px-px py-2 rounded-md my-px'>{el}</li>
                                    <span className='flex-1'></span>
                                    <button className='mr-2' onClick={(e) => {
                                        e.preventDefault();
                                        deleteDoneItem(id);
                                    }}><IconContext.Provider value={{ color: "red", size: "1.4em", className: "global-class-name" }}>
                                        <MdDeleteForever />
                                    </IconContext.Provider></button>
                                </div>
                            ))}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
