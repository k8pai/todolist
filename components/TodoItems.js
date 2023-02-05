import React from 'react'
import { IconContext } from 'react-icons';
import { MdDeleteForever } from 'react-icons/md';

const TodoItems = ({ elem, deleteItem, moveToDone }) => {
	return (
		<div className='group flex items-center select-none my-2 p-2 pl-3 dark:bg-terbg bg-tertxt rounded-md' key={elem.id}>
			<input 
				id={elem.id} 
				type={'checkbox'}
				checked={elem.done} 
				className={'mr-3 form-checkbox rounded-full text-green-500'}
				onChange={(e) => {
					e.preventDefault();
					moveToDone(elem.id);
				}} />
			
			<label 
				htmlFor={elem.id} 
				className='p-px flex-grow rounded-md outline-none tracking-widest text-left transition duration-150 ease-linear text-pribg hover:text-sectxt dark:text-pritxt' 
				onClick={(e) => {
					e.preventDefault();
					moveToDone(elem.id);
				}} 
			>{elem.done? <strike>{elem.task}</strike>: elem.task}</label>

			<button 
				className='ml-3 transition duration-300 opacity-0 lg:opacity-100 md:opacity-100 sm:opacity-100 xsm:opacity-100 group-hover:opacity-90' 
				onClick={(e) => {
					e.preventDefault();
					deleteItem(elem.id);
				}} >
				<IconContext.Provider value={{ color: "red", size: "1.2em", className: "global-class-name" }}>
					<MdDeleteForever />
				</IconContext.Provider>
			</button>
		</div>
	)
}

export default TodoItems
