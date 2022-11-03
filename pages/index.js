import Head from 'next/head'
import Image from 'next/image'
import { IconContext, icons } from "react-icons";
import { useEffect, useRef, useState } from 'react'

import { MdDeleteForever, MdDarkMode, MdPendingActions, MdDownloadDone, MdAdd } from 'react-icons/md'

import DoneList from '../components/DoneList';
import TodoList from '../components/TodoList';


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
    }

    return (
        <>
            <div className='bg-pritxt dark:bg-pribg'>
                <div className='w-full mx-auto h-fit'>
                    <div className='p-4 flex justify-center'>
					<input className='bg-white text-pribg dark:bg-secbg dark:text-pritxt focus:outline-none tracking-wide capitalize font-semibold p-2 pl-3 shadow-lg rounded-md px-2 w-5xl' 
						autoFocus 
						type="text" 
						placeholder="Start a new list?" 
						onKeyDown={(key) => {
							if(key.code == "Enter"){
								addLists();
							}
						}} size="50" ref={inpList}/>
                    </div>
                    <div className='flex justify-center flex-wrap'>
                    {Lists.map((item) => (
                        <div key={item.id} className='mt-10 px-4 m-4 h-fit max-w-2xl rounded-md border shadow-2xl bg-[#fff] dark:border-none dark:shadow-lg dark:bg-secbg'>
                            <div className='flex justify-between items-center select-none'>
                                <h1 id='listName' className='uppercase font-semibold tracking-widest outline-none text-blue-400 dark:text-cyan-100 text-lg mt-2 p-2'>{item.name}</h1>
                                <button className='opacity-0 transition duration-200 hover:opacity-100 hover:scale-125' onClick={(e) => {
                                    e.preventDefault();
                                    deleteList(item.name, item.id);
                                }}><IconContext.Provider value={{ color: "red", size: "1.3em", className: "global-class-name" }}>
                                    <MdDeleteForever />
                                </IconContext.Provider></button>
                            </div>
                            <TodoList list={item} listId={item.id} />
                        </div>
                    ))}
                    <button className='h-12 w-12 rounded-full bg-[#fff] text-pribg dark:bg-terbg dark:text-white m-4 mt-10 shadow-lg flex justify-center items-center' onClick={(e) => {
                        addLists(e);
                    }}><MdAdd /></button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
