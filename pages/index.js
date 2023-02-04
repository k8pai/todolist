import { IconContext } from "react-icons"
import { useMemo, useReducer, useRef, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import TodoList from '../components/TodoList'
import TodoHeader from '../components/TodoHeader'
import { listIdGenerator } from "../lib/generator"
import TodoBody from "../components/TodoBody"

export default function Home() {
	const [errorMessage, setErrorMessage] = useState(null);

	const [lists, setLists] = useState(() => {
		if (typeof window !== 'undefined') {
			return JSON.parse(localStorage.getItem('List')) || [{id: '000-00-0000', name: "default"}];
		}
		return [{id: '000-00-0000', name: "default"}]
	})
	const addList = (newName) => {
		const data = { id: listIdGenerator(), name: newName }
		setLists([...lists, data])
		localStorage.setItem('List', JSON.stringify([...lists, data]));
	}

	const renameList = (id, newName) => {
		const updatedList = lists.map(item => {
			if (item.id === id) {
				return {...item, name: newName};
			}
			return item;
		});

		setLists(updatedList);
		localStorage.setItem('List', JSON.stringify(updatedList));
	};

	const deleteList = (id) => {
		const updatedList = lists.filter(el => el.id !== id);
		setLists(updatedList);
		localStorage.setItem('List', JSON.stringify(updatedList));
	}

	const todoHeaderProps = { addList, errorMessage, setErrorMessage }
	const todoBodyProps = { deleteList, lists, renameList }
    return (
        <>
            <div className='flex-grow flex justify-center transition ease-linear duration-150 bg-pritxt dark:bg-pribg'>
                <div className='mx-auto w-full h-fit'>
                    <TodoHeader {...todoHeaderProps}/>
					<TodoBody {...todoBodyProps} />
                </div>
            </div>
        </>
    )
}
