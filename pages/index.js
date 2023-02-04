import { useEffect, useState } from 'react'
import TodoHeader from '../components/TodoHeader'
import { listIdGenerator } from "../lib/generator"
import InputTodoName from '../components/InputTodoName'
import TodoList from '../components/TodoList'

export default function Home() {

	const [lists, setLists] = useState(() => {
		if (typeof window !== 'undefined') {
			return JSON.parse(localStorage.getItem('List')) || [{id: '000-00-0000', name: "default"}];
		}
		return [{id: '000-00-0000', name: "default"}]
	})

	useEffect(() => {
		localStorage.setItem('List', JSON.stringify(lists));
	}, [])

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

	const todoHeaderProps = { addList }
	const InputTodoNameProps = { lists, setLists, renameList, deleteList }
	// const todoBodyProps = { deleteList, lists, renameList }
    return (
        <>
            <div className='flex-grow flex justify-center transition ease-linear duration-150 bg-pritxt dark:bg-pribg'>
                <div className='mx-auto w-full h-fit'>
                    <TodoHeader {...todoHeaderProps}/>
					<div className='mt-[50px] flex flex-wrap'>
						{lists.map(item => (
							<div key={item.id} className='m-3 px-4 h-fit max-w-sm w-full sm:flex-grow xsm:flex-grow rounded-md border shadow-2xl transition duration-150 bg-[#fff] dark:border-none dark:shadow-lg dark:bg-secbg'>
								<InputTodoName item={item} {...InputTodoNameProps} />
								<hr />
								<TodoList list={item} />
							</div>
						))}
					</div>
                </div>
            </div>
        </>
    )
}
