import React from 'react';
import { IconContext } from 'react-icons';
import { MdDeleteForever } from 'react-icons/md';

const TodoItems = ({ elem, deleteItem, moveToDone }) => {
	return (
		<div
			className="flex items-center select-none my-2 dark:bg-terbg bg-tertxt rounded-md"
			key={elem.id}
		>
			<label
				htmlFor={elem.id}
				className="group cursor-pointer p-3 flex-grow flex items-center rounded-md outline-none tracking-widest text-left"
				onClick={(e) => {
					e.preventDefault();
					moveToDone(elem.id);
				}}
			>
				<input
					id={elem.id}
					type={'checkbox'}
					checked={elem.done}
					className={'mr-3 form-checkbox rounded-full text-green-500'}
					disabled
				/>
				<p className="transition duration-150 ease-linear text-pribg group-hover:text-sectxt dark:text-pritxt">
					{elem.done ? <strike>{elem.task}</strike> : elem.task}
				</p>
			</label>
			<span className="mx-1">|</span>
			<button
				className="p-1 m-2 rounded transition duration-200 opacity-100 xl:hover:dark:bg-secbg xl:hover:bg-[#fff] xl:hover:scale-125 xl:hover:opacity-100"
				onClick={(e) => {
					e.preventDefault();
					deleteItem(elem.id);
				}}
			>
				<IconContext.Provider
					value={{
						color: 'red',
						size: '1.2em',
						className: 'global-class-name',
					}}
				>
					<MdDeleteForever />
				</IconContext.Provider>
			</button>
		</div>
	);
};

export default TodoItems;
