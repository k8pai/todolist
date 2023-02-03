import React, { useEffect, useMemo, useReducer, useState } from 'react'
import NamingErrorMessage from './NamingErrorMessage';
import { useLocalstorage } from '../lib/hooks';
import { listIdGenerator } from '../lib/generator';

function reducer(state, val){
	const data = { id: listIdGenerator(), name: val }
	localStorage.setItem('List', JSON.stringify([...state, data]));
	return [...state, data]
}

const TodoHeader = ({ addLists, errorMessage, setErrorMessage }) => {

	const [name, setName] = useState('')
	const initlist = useMemo(() => {
		if (typeof window !== 'undefined') {
			let val = JSON.parse(localStorage.getItem('List'));
			if(val){
				return [...val]
			}
			return [{id: listIdGenerator(), name: "default"}]
		}else{
			return [{id: listIdGenerator(), name: "default"}]
		}
	}, [])
	const [list, setList] = useReducer(reducer, initlist);

	return (
		<div className='max-w-4xl w-full mx-auto p-4 flex-col items-center justify-center'>
			<NamingErrorMessage errorMessage={errorMessage} />
			<form className=' w-full flex justify-center' onSubmit={(e) => {
				e.preventDefault()
				setList(name)
				setName('');

				setTimeout(() => {
					setErrorMessage(null);
				}, 2500);
				}}>
				<input className='max-w-[400px] w-full transition-all duration-150 bg-white text-pribg dark:bg-secbg dark:text-pritxt outline-none focus:outline-none tracking-wide uppercase font-semibold p-3 px-4 shadow-lg rounded-md sm:flex-1 xsm:flex-grow' 
					autoFocus
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
