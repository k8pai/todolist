import React, { useEffect, useRef, useState } from 'react'
import { IconContext } from 'react-icons';
import { MdDeleteForever, MdLabelImportant } from 'react-icons/md';
import { todoIdGenerator } from '../lib/generator';

export default function TodoList({list}) {

	const [todoName, setTodoName] = useState('');
	const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const exstTodoList = localStorage.getItem(`tasks[${list.id}]`);
        setTodoList( exstTodoList ? JSON.parse(exstTodoList) : [] );
    }, []);
    
    const addTodo = (val) => {
        if(val != "") {
            const next = [{
                id: todoIdGenerator(),
                task: val,
				status: 1,
            }, ...todoList];
            localStorage.setItem(`tasks[${list.id}]`, JSON.stringify(next));
            setTodoList(next);
        }
    }

    const deleteItem = (ind) => {
        const todos = localStorage.getItem(`tasks[${list.id}]`);
        var toBeDone = todos? JSON.parse(todos) : [];
        toBeDone = toBeDone.filter(el => el.id != ind)
        localStorage.setItem(`tasks[${list.id}]`, JSON.stringify(toBeDone));
        setTodoList(toBeDone);
    }

	const upPriority = ((uniqId) => {
		const todos = localStorage.getItem(`tasks[${list.id}]`);
		const toBeDone = todos? JSON.parse(todos) : [];

		toBeDone.map(el => {
			if(uniqId == el.id){
				el.status = (el.status == 1) ? 2 : 1;
			}
		})
        localStorage.setItem(`tasks[${list.id}]`, JSON.stringify(toBeDone));
        setTodoList(toBeDone);

	})

    const moveToDone = ((uniqId, uniqIndex) => {
        const todos = localStorage.getItem(`tasks[${list.id}]`);
        const toBeDone = todos? JSON.parse(todos) : [];
        toBeDone.map(el => {
            if(uniqId == el.id){
                el.status = (el.status == 1 || el.status == 2) ? 0 : 1; 
            }
        })
        localStorage.setItem(`tasks[${list.id}]`, JSON.stringify(toBeDone));
        setTodoList(toBeDone);
    })
    return (
    <div className='transition duration-300 ease-linear'>
        <ul className='pb-2 list-none text-md font-medium font-sans tracking-wide capitalize min-w-2xl'>
        <form className='flex items-center my-2' onSubmit={(e) => {
            e.preventDefault();
            addTodo(todoName)
			setTodoName('');
            }}>
            <input 
				className='tracking-widest font-semibold rounded-md p-3 my-2 w-full bg-transparent border border-black dark:border-white' 
				autoFocus 
				autoComplete='off' 
				type="text" 
				placeholder="what's on your mind?" 
				id="todo1" 
				name="todo1"
				value={todoName}
				onChange={(e) => setTodoName(e.target.value)} 
			/>
            {/* <input className='form-input tracking-wide capitalize font-semibold p-2 rounded-md px-2 w-5xl mx-3 hidden' type={"submit"} /> */}
        </form>
		{todoList.sort((a, b) => b.status - a.status).filter(elem =>elem.status == 2).map((el, ind) => (
			<div className='group flex items-center select-none my-2 p-2 pl-3 dark:bg-terbg bg-tertxt rounded-md' key={el.id}>
				<input id={el.id} type={'checkbox'} className='mr-3' onChange={(e) => {
					e.preventDefault(); 
					moveToDone(el.id, ind);
				}} />
				<label htmlFor={el.id} className='p-px flex-grow rounded-md outline-none tracking-widest text-left transition duration-150 ease-linear text-pribg hover:text-sectxt dark:text-pritxt' onClick={(e) => {
					e.preventDefault();
					moveToDone(el.id, ind);
				}}>{el.task}</label>
				<button className='ml-3 ' onClick={(e) => {
						e.preventDefault();
						upPriority(el.id);
					}}><IconContext.Provider value={{ color: "red", size: "1.2em", className: "global-class-name" }}>
						<MdLabelImportant />
					</IconContext.Provider>
				</button>
				<button className='ml-3 transition duration-300 opacity-0 lg:opacity-100 md:opacity-100 sm:opacity-100 xsm:opacity-100 group-hover:opacity-90' onClick={(e) => {
						e.preventDefault();
						deleteItem(el.id);
					}}><IconContext.Provider value={{ color: "red", size: "1.2em", className: "global-class-name" }}>
						<MdDeleteForever />
					</IconContext.Provider>
				</button>
			</div>
		))}
		{todoList.sort((a, b) => b.status - a.status).filter(elem =>elem.status == 1).map((el, ind) => (
			<div className='group flex items-center select-none my-2 p-2 pl-3 dark:bg-terbg bg-tertxt rounded-md' key={el.id}>
				<input id={el.id} type={'checkbox'} className='mr-3' onChange={(e) => {
					e.preventDefault(); 
					moveToDone(el.id, ind);
				}} />
				<label htmlFor={el.id} className='p-px flex-grow rounded-md outline-none tracking-widest text-left transition duration-150 ease-linear text-pribg hover:text-sectxt dark:text-pritxt' onClick={(e) => {
					e.preventDefault();
					moveToDone(el.id, ind);
				}}>{el.task}</label>
				<button className='ml-3' onClick={(e) => {
						e.preventDefault();
						upPriority(el.id);
					}}><IconContext.Provider value={{ color: "green", size: "1.2em", className: "global-class-name" }}>
						<MdLabelImportant />
					</IconContext.Provider>
				</button>
				<button className='ml-3 transition duration-300 opacity-0 lg:opacity-100 md:opacity-100 sm:opacity-100 xsm:opacity-100 group-hover:opacity-90' onClick={(e) => {
						e.preventDefault();
						deleteItem(el.id);
					}}><IconContext.Provider value={{ color: "red", size: "1.2em", className: "global-class-name" }}>
						<MdDeleteForever />
					</IconContext.Provider>
				</button>
			</div>
		))}
		<div className='py-2 m-2'>
			<hr />
		</div>
        {todoList.filter(elem => elem.status == 0).map((el, ind) => (
            <div className='group flex items-center select-none my-2 p-2 pl-3 dark:bg-terbg bg-tertxt rounded-md' key={el.id}>
			
				<input id={el.id} type={'checkbox'} className='mr-3' checked onChange={(e) => {
					e.preventDefault(); 
					moveToDone(el.id, ind);
				}} />
                <label htmlFor={el.id} className='p-px tracking-widest flex-grow text-left rounded-md transition duration-150 text-sectxt hover:text-pribg hover:dark:text-pritxt' onClick={(e) => {
                    e.preventDefault();
                    moveToDone(el.id, ind);
                }}><strike>{el.task}</strike></label>
                <button className='ml-3 transition duration-200 opacity-0 lg:opacity-100 md:opacity-100 sm:opacity-100 xsm:opacity-100 group-hover:opacity-90' onClick={(e) => {
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
