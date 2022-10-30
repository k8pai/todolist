import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import { MdDeleteForever, MdDownloadDone } from 'react-icons/md';

export default function DoneList() { 
    useEffect(() => { 
        const exstTodoList = localStorage.getItem('todoList');
        const exstDoneList = localStorage.getItem('doneList'); 
        setTodoList( exstTodoList ? JSON.parse(exstTodoList) : [] );
        setDoneList( exstDoneList ? JSON.parse(exstDoneList) : [] );
    }, []); 
    const [todoList, setTodoList] = useState([]);
    const [doneList, setDoneList] = useState([]);

    const deleteDoneItem = (ind) => {
        const todos = doneList.filter((el, id) => id != ind);
        setDoneList(todos ? todos : []);
        localStorage.setItem('doneList', JSON.stringify(todos));
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
    <div>
        {doneList.map((el, id) => (
            <div className='flex items-center select-none' key={id}>
                <button className='mr-2' onClick={(e) => {
                    e.preventDefault();
                    moveToTodo(id);
                }}><IconContext.Provider value={{ color: "darkgreen", size: "1.4em", className: "global-class-name" }}>
                    <MdDownloadDone />
                </IconContext.Provider></button>
                <li className='px-px py-2 tracking-widest rounded-md my-px'><strike>{el}</strike></li>
                <span className='flex-1'></span>
                <button className='mr-2' onClick={(e) => {
                    e.preventDefault();
                    deleteDoneItem(id);
                }}><IconContext.Provider value={{ color: "red", size: "1.4em", className: "global-class-name" }}>
                    <MdDeleteForever />
                </IconContext.Provider></button>
            </div>
        ))}
    </div>
  )
}
