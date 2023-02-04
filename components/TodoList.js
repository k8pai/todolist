import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import { MdDeleteForever } from 'react-icons/md';
import { todoIdGenerator } from '../lib/generator';
import InputTodoItem from './InputTodoItem';

export default function TodoList(props) {
	const { list } = props;
	const [todoList, setTodoList] = useState(() => {
		if (typeof window !== 'undefined') {
			return JSON.parse(localStorage.getItem(`tasks[${list.id}]`)) || [];
		}
		return []
	});

    useEffect(() => {
		localStorage.setItem(`tasks[${list.id}]`, JSON.stringify(todoList));
    }, [todoList]);
    
    const addTodo = (val) => {
        if(val !== "") {
            const data = {
                id: todoIdGenerator(),
                task: val,
				done: false,
            };
            setTodoList(values => [data, ...values]);
        }
    }

    const deleteItem = (ind) => {
        setTodoList(value => value.filter(el => el.id !== ind))
    }

    const moveToDone = (uniqId => {
		const data = todoList.map(el => {
			if(el.id === uniqId){
				console.log(typeof el.done);
				return { ...el, done: !el.done }
			}
			return el
		})
		setTodoList(data);
    })

	const inputTodoItemProps = { addTodo}
    return (
    <div className='transition duration-300 ease-linear'>
        <ul className='pb-2 list-none text-md font-medium font-sans tracking-wide capitalize min-w-2xl'>
			<InputTodoItem {...inputTodoItemProps} />
			{todoList.filter(el => !el.done).map(el => {
				return (
					<div className='group flex items-center select-none my-2 p-2 pl-3 dark:bg-terbg bg-tertxt rounded-md' key={el.id}>
						<input 
							id={el.id} 
							type={'checkbox'} 
							className='mr-3 form-checkbox rounded-full' 
							onChange={(e) => {
								e.preventDefault();
								moveToDone(el.id);
							}} />
						<label 
							htmlFor={el.id} 
							className='p-px flex-grow rounded-md outline-none tracking-widest text-left transition duration-150 ease-linear text-pribg hover:text-sectxt dark:text-pritxt' 
							onClick={(e) => {
								e.preventDefault();
								moveToDone(el.id);
							}} 
						>{el.task}</label>

						<button 
							className='ml-3 transition duration-300 opacity-0 lg:opacity-100 md:opacity-100 sm:opacity-100 xsm:opacity-100 group-hover:opacity-90' 
							onClick={(e) => {
								e.preventDefault();
								deleteItem(el.id);
							}} >
							<IconContext.Provider value={{ color: "red", size: "1.2em", className: "global-class-name" }}>
								<MdDeleteForever />
							</IconContext.Provider>
						</button>
					</div>
				);
			})}
			<div className='py-2 m-2'>
				<hr />
			</div>
			{todoList.filter(el => el.done).map(el => (
				<div className='group flex items-center select-none my-2 px-3 dark:bg-terbg bg-tertxt rounded-md' key={el.id}>
					<input 
						id={el.id} 
						type={'checkbox'} 
						className='mr-3 form-checkbox shadow-xl text-green-300 checked:text-green-600 rounded-full' 
						checked 
						onChange={(e) => {
							e.preventDefault(); 
							moveToDone(el.id);
						}} />
					
					<label 
						htmlFor={el.id} 
						className='p-2 tracking-widest flex-grow text-left rounded-md transition duration-150 text-sectxt hover:text-pribg hover:dark:text-pritxt' 
						onClick={(e) => {
							e.preventDefault();
							moveToDone(el.id);
						}}>
						<strike>{el.task}</strike>
					</label>

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
