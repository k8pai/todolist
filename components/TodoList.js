import React, { useEffect, useRef, useState } from 'react'
import { IconContext } from 'react-icons';
import { IoMdAdd } from 'react-icons/io';
import { MdDeleteForever, MdDownloadDone, MdPendingActions } from 'react-icons/md';

export default function TodoList({list}) {
    const inpEl = useRef();
    useEffect(() => {
        const exstTodoList = localStorage.getItem(`tasks[${list.id}]`);
        setTodoList( exstTodoList ? JSON.parse(exstTodoList) : [] );
    }, []);
    const [todoList, setTodoList] = useState([]);
    
    const addTodo = () => {
        const val = inpEl.current.value;
        if(val != "") {
            const next = [{
                id: (Math.floor(Math.random()*1000000)+"-"+Math.floor(Math.random()*100000000)+"-"+Math.floor(Math.random()*1000000)),
                task: val,
                done: false,
            }, ...todoList];
            localStorage.setItem(`tasks[${list.id}]`, JSON.stringify(next));
            setTodoList(next);
            inpEl.current.value = "";
            focus(inpEl);
        }
    }
    const deleteItem = (ind) => {
        
        const todos = localStorage.getItem(`tasks[${list.id}]`);
        var toBeDone = todos? JSON.parse(todos) : [];
        toBeDone = toBeDone.filter(el => el.id != ind)
        localStorage.setItem(`tasks[${list.id}]`, JSON.stringify(toBeDone));
        setTodoList(toBeDone);
    }
    const moveToDone = ((uniqId, uniqIndex) => {
        const todos = localStorage.getItem(`tasks[${list.id}]`);
        const toBeDone = todos? JSON.parse(todos) : [];
        toBeDone.map(el => {
            if(uniqId == el.id){
                el.done = !el.done;
            }
        })
        localStorage.setItem(`tasks[${list.id}]`, JSON.stringify(toBeDone));
        setTodoList(toBeDone);
    })
    return (
    <div>
        <hr />
        <ul className='pb-2 list-none text-md font-medium font-sans tracking-wide capitalize min-w-2xl'>
        <form className='flex items-center my-2' onSubmit={(e) => {
            e.preventDefault();
            addTodo();
            }}>
            <label htmlFor="todo1" className='opacity-100'>
                <IconContext.Provider value={{ color: "gray", size: "1.4em", className: "global-class-name" }}>
                    <IoMdAdd />
                </IconContext.Provider>
            </label>
            <input className='tracking-widest capitalize font-semibold rounded-md px-2 py-px outline-none bg-transparent' autoFocus type="text" placeholder="what's on your mind?" id="todo1" name="todo1" ref={inpEl}/>
            <input className='form-input tracking-wide capitalize font-semibold p-2 rounded-md px-2 w-5xl mx-3 hidden' type={"submit"} />
        </form>
        {todoList.filter(elem => elem.done == false).map((el, ind) => (
            <div className='group flex justify-evenly items-center select-none h-fit w-full' key={el.id}>
                <button className='mr-2 transition duration-200 opacity-0 group-hover:opacity-90' onClick={(e) => {
                    e.preventDefault();
                    moveToDone(el.id, ind);
                }}><IconContext.Provider value={{ color: "blue", size: "1.2em", className: "global-class-name" }}>
                    <MdDownloadDone />
                </IconContext.Provider></button>
                <li className='px-px py-1 rounded-md outline-none tracking-widest block'>{el.task}</li>
                <span className='flex-1'></span>
                <button className='mr-2 transition duration-200 opacity-0 group-hover:opacity-90' onClick={(e) => {
                    e.preventDefault();
                    deleteItem(el.id);
                }}><IconContext.Provider value={{ color: "red", size: "1.2em", className: "global-class-name" }}>
                    <MdDeleteForever />
                </IconContext.Provider>
                </button>
            </div>
        ))}
        </ul>
        <hr className='bg-black h-1' />
        <ul className='py-2 list-none text-md font-medium font-sans tracking-wide capitalize'>
        <code className='font-semibold tracking-wide text-green-400 text-lg mb-px pl-2'>Done</code>
        <hr />
        {todoList.filter(elem => elem.done == true).map((el, ind) => (
            <div className='group flex items-center select-none' key={el.id}>
                <button className='mr-2 transition duration-200 opacity-0 group-hover:opacity-90' onClick={(e) => {
                    e.preventDefault();
                    moveToDone(el.id, ind);
                }}><IconContext.Provider value={{ color: "darkgreen", size: "1.2em", className: "global-class-name" }}>
                    <MdPendingActions />
                </IconContext.Provider></button>
                <li className='px-px py-1 tracking-widest rounded-md my-px'><strike>{el.task}</strike></li>
                <span className='flex-1'></span>
                <button className='mr-2 transition duration-200 opacity-0 group-hover:opacity-90' onClick={(e) => {
                    e.preventDefault();
                    deleteItem(el.id);
                }}><IconContext.Provider value={{ color: "red", size: "1.2em", className: "global-class-name" }}>
                    <MdDeleteForever />
                </IconContext.Provider></button>
            </div>
        ))}
        </ul>
    </div>
  )
}
