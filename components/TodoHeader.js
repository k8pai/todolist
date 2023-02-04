import React, { useState } from 'react'
import NamingErrorMessage from './NamingErrorMessage';


const TodoHeader = ({ addList }) => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [name, setName] = useState('')

	const addLists = (val) => {
		if (!val) {
			console.log("Error message set!");
			setErrorMessage('Name can\'t be left empty!');
			return;
		}
		var listTemp = localStorage.getItem('List');
		const currList = listTemp ? JSON.parse(listTemp) : [];
		let names = currList? currList.map(data => data.name): [];
		if(!names.includes(val)){
			addList(val)
		}else{
			console.log("error message set!");
			setErrorMessage('List Exist, Try Another Name!');
			return;
		}
	}

	return (
		<div className='max-w-4xl w-full mx-auto p-4 flex-col items-center justify-center'>
			<NamingErrorMessage errorMessage={errorMessage} />
			<form 
				className=' w-full flex justify-center' 
				onSubmit={(e) => {
					e.preventDefault()
					addLists(name)
					setName('');
					setTimeout(() => {
						setErrorMessage(null);
					}, 2500);
				}}>
				<input 
					className='max-w-[400px] w-full transition-all duration-150 bg-white text-pribg dark:bg-secbg dark:text-pritxt outline-none focus:outline-none tracking-wide uppercase font-semibold p-3 px-4 shadow-lg rounded-md sm:flex-1 xsm:flex-grow' 
					autoComplete='off'
					type="text"
					placeholder="type here..."
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</form>
		</div>
	)
}

export default TodoHeader
