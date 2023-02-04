import React, { useEffect, useState } from 'react'

const InputTodoName = (props) => {
	const { list, item, rename } = props
	const [state, setState] = useState(item.name)
	
	return (
		<input 
			type='text' 
			id={item.id}
			value={state} 
			onChange={(e) => {
				setState(e.target.value)
				rename(item.id, state)
			}}
			className='tracking-widest font-semibold rounded-md px-3 py-2 my-2 outline-none w-full bg-transparent ' 
			autoComplete='off'
		/>
	)
}

export default InputTodoName
