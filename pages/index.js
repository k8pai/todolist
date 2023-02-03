import Head from 'next/head'
import Image from 'next/image'
import { IconContext } from "react-icons"
import { useEffect, useRef, useState } from 'react'
import { MdDeleteForever, MdAdd } from 'react-icons/md'
import { CiWarning } from 'react-icons/ci'
import TodoList from '../components/TodoList'
import NamingErrorMessage from '../components/NamingErrorMessage'
import TodoHeader from '../components/TodoHeader'


export default function Home() {
    const inpList = useRef();
    const inpEl = useRef();
	const [errorMessage, setErrorMessage] = useState(null);
    useEffect(() => {
        const listTemp = localStorage.getItem('Lists');
        const exstTodoList = localStorage.getItem('todoList');
        const exstDoneList = localStorage.getItem('doneList');
		const date = new Date();
		const dateString = date.toLocaleString('en-US', {
			month: 'short',
			day: 'numeric',
			weekday: 'short',
		});
		const timeString = date.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: true
		});
        setLists( listTemp ? JSON.parse(listTemp) : [{id: (Math.floor(Math.random()*100)+"-"+Math.floor(Math.random()*10)+"-"+Math.floor(Math.random()*1000)), name: "default", date: dateString, time: timeString,}] );
        setTodoList( exstTodoList ? JSON.parse(exstTodoList) : [] );
        setDoneList( exstDoneList ? JSON.parse(exstDoneList) : [] );
    }, []);
    const [Lists, setLists] = useState([]);
    const [todoList, setTodoList] = useState([]);
    const [doneList, setDoneList] = useState([]);

    const addLists = (e) => {
		e.preventDefault();
        const val = inpList.current.value;
		if (!val) {
			// Set the error message in the component's state
			
			console.log("Error message set!");
			setErrorMessage('Name can\'t be left empty!');
			return;
		}
		setErrorMessage(null);
        var listTemp = localStorage.getItem('Lists');
        const currList = listTemp ? JSON.parse(listTemp) : [];
		let names = [];
		if (currList.length > 0) {
			names = currList.map(data => data.name);
		}
		if(!names.includes(val)){
			const date = new Date();
			const dateString = date.toLocaleString('en-US', {
				month: 'short',
				day: 'numeric',
				weekday: 'short',
			});
			const timeString = date.toLocaleTimeString('en-US', {
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				hour12: true
			});
			const data = {
				id: (Math.floor(Math.random()*100)+"-"+Math.floor(Math.random()*10)+"-"+Math.floor(Math.random()*1000)),
				name: val,
				date: dateString,
				time: timeString,
			}
			const next = [...Lists, data];
			setLists(next);
			localStorage.setItem(`tasks[${data.id}]`, JSON.stringify([]))
			localStorage.setItem('Lists', JSON.stringify(next));
			inpList.current.value = "";
			focus(inpList);
			setErrorMessage(null);
			return;
		}else{
			console.log("error message set!");
			setErrorMessage('List Exist, Try Another Name!');
			return;
		}
    }
    const deleteList = (name, ind) => {
        localStorage.removeItem(`tasks[${ind}]`);
        const todos = Lists.filter((el) => el.id != ind);
        setLists(todos ? todos : []);
        localStorage.setItem('Lists', JSON.stringify(todos));
    }
	const todoHeaderProps = { addLists, errorMessage, setErrorMessage }
    return (
        <>
            <div className='flex-grow flex justify-center transition ease-linear duration-150 bg-pritxt dark:bg-pribg'>
                <div className='mx-auto w-full h-fit'>
                    <TodoHeader {...todoHeaderProps}/>
                    <div className='mt-[50px] flex flex-wrap'>
                    {Lists.map((item) => (
                        <div key={item.id} className='m-3 px-4 h-fit max-w-sm w-full sm:flex-grow xsm:flex-grow rounded-md border shadow-2xl transition duration-150 bg-[#fff] dark:border-none dark:shadow-lg dark:bg-secbg'>
                            <div className='flex justify-start select-none'>
								<h1 id='listName' className='uppercase flex-grow font-semibold tracking-widest outline-none transition duration-150 text-blue-400 dark:text-cyan-100 text-lg mt-2 p-2'>{item.name}</h1>
                                <button className='opacity-0 transition duration-200 lg:opacity-100 md:opacity-100 sm:opacity-100 xsm:opacity-100 hover:opacity-100 hover:scale-125' onClick={(e) => {
                                    e.preventDefault();
                                    deleteList(item.name, item.id);
                                }}><IconContext.Provider value={{ color: "red", size: "1.3em", className: "global-class-name" }}>
                                    <MdDeleteForever />
                                </IconContext.Provider></button>
                            </div>
							<h4 id='listDate' className=' transition duration-150 text-blue-400 dark:text-cyan-100 text-sm mb-4 pl-2'>{item.date} / {item.time}</h4>
                            <TodoList list={item} listId={item.id} />
                        </div>
                    ))}
                    </div>
                    
                </div>
            </div>
        </>
    )
}
