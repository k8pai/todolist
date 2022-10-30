import React, { useEffect, useRef, useState } from 'react'
import { IconContext } from 'react-icons';
import { IoMdAdd } from 'react-icons/io';
import { MdDeleteForever, MdDownloadDone, MdPendingActions } from 'react-icons/md';



export default function TodoList({list}) {
    const inpEl = useRef();
    useEffect(() => {
        const exstTodoList = localStorage.getItem(`tasks[${list}]`);
        const exstDoneList = localStorage.getItem('doneList');
        setTodoList( exstTodoList ? JSON.parse(exstTodoList) : [] );
        setDoneList( exstDoneList ? JSON.parse(exstDoneList) : [] );
    }, []);
    const [todoList, setTodoList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    
    const addTodo = () => {
        const val = inpEl.current.value;
        if(val != "") {
            const next = [{
                id: (Math.floor(Math.random()*1000000)+"-"+Math.floor(Math.random()*100000000)+"-"+Math.floor(Math.random()*1000000)),
                task: val,
                done: false,
            }, ...todoList];
            localStorage.setItem(`tasks[${list}]`, JSON.stringify(next));
            setTodoList(next);
            inpEl.current.value = "";
            focus(inpEl);
        }
    }
    const deleteItem = (ind) => {
        
        const todos = localStorage.getItem(`tasks[${list}]`);
        var toBeDone = todos? JSON.parse(todos) : [];
        toBeDone = toBeDone.filter(el => el.id != ind)
        localStorage.setItem(`tasks[${list}]`, JSON.stringify(toBeDone));
        setTodoList(toBeDone);

        // const todos = todoList.filter((ele) => ele.id != ind);
        // setTodoList(todos ? todos : []);
        // localStorage.setItem('todoList', JSON.stringify(todos));
    }
    const moveToDone = ((uniqId, uniqIndex) => {
        const todos = localStorage.getItem(`tasks[${list}]`);
        const toBeDone = todos? JSON.parse(todos) : [];
        toBeDone.map(el => {
            if(uniqId == el.id){
                el.done = !el.done;
            }
        })
        // toBeDone[uniqIndex].done = !toBeDone[uniqIndex].done;
        localStorage.setItem(`tasks[${list}]`, JSON.stringify(toBeDone));
        setTodoList(toBeDone);
    })
    return (
    <div>
        <hr />
        <ul className='p-5 pt-0 list-none text-md font-medium font-sans tracking-wide capitalize'>
        <form className='flex items-center mt-2' onSubmit={(e) => {
            e.preventDefault();
            addTodo();
            }}>
            <label htmlFor="todo1" className='opacity-100'>
                <IconContext.Provider value={{ color: "gray", size: "1.4em", className: "global-class-name" }}>
                    <IoMdAdd />
                </IconContext.Provider>
            </label>
            {/* <h1 className='font-semibold tracking-wide text-blue-400 text-lg p-2 py-px' contentEditable="true">List 1</h1> */}
            <input className='tracking-widest capitalize font-semibold rounded-md px-2 py-px outline-none' autoFocus type="text" placeholder="what's on your mind?" size="40" id="todo1" name="todo1" ref={inpEl}/>
            <input className='form-input tracking-wide capitalize font-semibold p-2 rounded-md px-2 w-5xl mx-3 hidden' type={"submit"} />
        </form>
        {todoList.filter(elem => elem.done == false).map((el, ind) => (
            <div className='flex justify-evenly items-center select-none h-fit' key={el.id}>
                {/* <input type="radio" name='todo' className="rounded-md text-pink-500 mx-4 h-4 w-4"/> */}
                <button className='mr-2' onClick={(e) => {
                    e.preventDefault();
                    moveToDone(el.id, ind);
                }}><IconContext.Provider value={{ color: "blue", size: "1.4em", className: "global-class-name" }}>
                    <MdPendingActions />
                </IconContext.Provider></button>
                <li className='px-px py-2 rounded-md outline-none tracking-widest' contentEditable="true">{el.task}</li>
                <span className='flex-1'></span>
                <button className='mr-2' onClick={(e) => {
                    e.preventDefault();
                    deleteItem(el.id);
                }}><IconContext.Provider value={{ color: "red", size: "1.4em", className: "global-class-name" }}>
                    <MdDeleteForever />
                </IconContext.Provider>
                </button>
            </div>
        ))}
        </ul>
        <hr className='bg-black h-1' />
        <ul className='p-5 list-none text-md font-medium font-sans tracking-wide capitalize'>
        <code className='font-semibold tracking-wide text-green-400 text-lg mb-px -px-5'>Done</code>
        <hr />
        {todoList.filter(elem => elem.done == true).map((el, ind) => (
            <div className='flex items-center select-none' key={el.id}>
                <button className='mr-2' onClick={(e) => {
                    e.preventDefault();
                    moveToDone(el.id, ind);
                }}><IconContext.Provider value={{ color: "darkgreen", size: "1.4em", className: "global-class-name" }}>
                    <MdDownloadDone />
                </IconContext.Provider></button>
                <li className='px-px py-2 tracking-widest rounded-md my-px'><strike>{el.task}</strike></li>
                <span className='flex-1'></span>
                <button className='mr-2' onClick={(e) => {
                    e.preventDefault();
                    deleteItem(el.id);
                }}><IconContext.Provider value={{ color: "red", size: "1.4em", className: "global-class-name" }}>
                    <MdDeleteForever />
                </IconContext.Provider></button>
            </div>
        ))}
        </ul>
    </div>
  )
}
