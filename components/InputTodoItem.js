import React, { useState } from 'react'

const InputTodoItem = ({ addItem }) => {

	const [todoName, setTodoName] = useState('');

	return (
		<form 
			className='flex items-center my-2' 
			onSubmit={(e) => {
				e.preventDefault();
				addItem(todoName) 
				setTodoName('');
            }}>
            <input 
				className='tracking-widest font-semibold rounded-md p-3 my-2 w-full bg-transparent border border-black dark:border-white' 
				autoFocus 
				autoComplete='off' 
				type="text" 
				placeholder="what's on your mind?" 
				value={todoName}
				onChange={(e) => setTodoName(e.target.value)} 
			/>
		</form>
	)
}

export default InputTodoItem
