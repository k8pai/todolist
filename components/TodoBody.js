import React from 'react'
import { IconContext } from 'react-icons';
import { MdDeleteForever } from 'react-icons/md';
import TodoList from './TodoList';
import InputTodoName from './InputTodoName';

const TodoBody = ({ deleteList, lists, renameList }) => {
	return (
		<div className='mt-[50px] flex flex-wrap'>
			{lists.map((item, ind) => (
				<div key={ind} className='m-3 px-4 h-fit max-w-sm w-full sm:flex-grow xsm:flex-grow rounded-md border shadow-2xl transition duration-150 bg-[#fff] dark:border-none dark:shadow-lg dark:bg-secbg'>
					
					<InputTodoName 
						item={item}
						rename={renameList}
						deleteList={deleteList}
					/>
					{/* <div className='flex justify-start select-none'>
						<InputTodoName 
							list={lists}
							item={item}
							rename={renameList}
							delete={deleteList}
						/>
						<button 
							className='m-3 opacity-0 transition duration-200 lg:opacity-100 md:opacity-100 sm:opacity-100 xsm:opacity-100 hover:opacity-100 hover:scale-125' 
							onClick={(e) => {
								e.preventDefault();
								deleteList(item.id);
							}}>
							<IconContext.Provider value={{ color: "red", size: "1.3em", className: "global-class-name" }}>
								<MdDeleteForever />
							</IconContext.Provider>
						</button>
					</div> */}
					<hr />
					<TodoList list={item} />
				</div>
			))}
		</div>
	)
}

export default TodoBody
