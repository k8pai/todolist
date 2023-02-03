import { IconContext } from "react-icons"
import { useMemo, useReducer, useRef, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import TodoList from '../components/TodoList'
import TodoHeader from '../components/TodoHeader'
import { listIdGenerator } from "../lib/generator"

export default function Home() {
	const [errorMessage, setErrorMessage] = useState(null);
	
	function reducer(state, action){
		switch(action.type){
			case 'ADD_LIST': {
				const data = { id: listIdGenerator(), name: action.payload }
				localStorage.setItem('List', JSON.stringify([...state, data]));
				return [...state, data]
			}
			case 'DELETE_LIST': {
				if(action.payload !== '000-00-0000'){
					localStorage.removeItem(`tasks[${action.payload}]`);
					const todos = state.filter(el => el.id !== action.payload);
					localStorage.setItem('List', JSON.stringify(todos));
					return state.filter(el => el.id !== action.payload)
				}
				setErrorMessage('Can\'t delete default card')
				setTimeout(() => {
					setErrorMessage(null);
				}, 1500);
				return state
			}
			default : {
				return state
			}
		}
	}

	const initlist = useMemo(() => {
		if (typeof window !== 'undefined') {
			let val = JSON.parse(localStorage.getItem('List'));
			return val? [...val] : [{id: '000-00-0000', name: "default"}];
		}
		return [{id: '000-00-0000', name: "default"}]
	}, [])
	const [list, dispatch] = useReducer(reducer, initlist);

    const deleteList = (ind) => {
		dispatch({
			type: 'DELETE_LIST',
			payload: ind,
		})
    }

	const todoHeaderProps = { list, dispatch, errorMessage, setErrorMessage }
    return (
        <>
            <div className='flex-grow flex justify-center transition ease-linear duration-150 bg-pritxt dark:bg-pribg'>
                <div className='mx-auto w-full h-fit'>
                    <TodoHeader {...todoHeaderProps}/>
                    <div className='mt-[50px] flex flex-wrap'>
                    {list.map((item, ind) => (
                        <div key={ind} className='m-3 px-4 h-fit max-w-sm w-full sm:flex-grow xsm:flex-grow rounded-md border shadow-2xl transition duration-150 bg-[#fff] dark:border-none dark:shadow-lg dark:bg-secbg'>
                            <div className='flex justify-start select-none'>
								<h1 id='listName' className='uppercase flex-grow font-semibold tracking-widest outline-none transition duration-150 text-blue-400 dark:text-cyan-100 text-lg mt-2 p-2'>{item.name}</h1>
                                <button className='opacity-0 transition duration-200 lg:opacity-100 md:opacity-100 sm:opacity-100 xsm:opacity-100 hover:opacity-100 hover:scale-125' onClick={(e) => {
                                    e.preventDefault();
                                    deleteList(item.id);
                                }}><IconContext.Provider value={{ color: "red", size: "1.3em", className: "global-class-name" }}>
                                    <MdDeleteForever />
                                </IconContext.Provider></button>
                            </div>
                            <TodoList list={item} listId={item.id} />
                        </div>
                    ))}
                    </div>
                    
                </div>
            </div>
        </>
    )
}
