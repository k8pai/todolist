import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdDeleteForever } from 'react-icons/md';

const TodoHeader = ({ item, renameList, deleteList }) => {
	const [state, setState] = useState(item.name);

	return (
		<div className="flex justify-start select-none">
			<input
				type="text"
				id={item.id}
				value={state}
				onChange={(e) => {
					setState(e.target.value);
					renameList(item.id, e.target.value);
				}}
				className="tracking-widest text-pribg dark:text-cyan-200 capitalize font-semibold rounded-md px-3 py-2 my-2 outline-none w-full bg-transparent"
				autoComplete="off"
			/>
			<button
				className="m-3 opacity-100 xl:opacity-0 transition duration-200 hover:opacity-100 hover:scale-125"
				onClick={(e) => {
					e.preventDefault();
					deleteList(item.id);
				}}
			>
				<IconContext.Provider
					value={{
						color: 'red',
						size: '1.3em',
						className: 'global-class-name',
					}}
				>
					<MdDeleteForever />
				</IconContext.Provider>
			</button>
		</div>
	);
};

export default TodoHeader;
