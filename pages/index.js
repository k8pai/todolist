import Head from 'next/head'
import Image from 'next/image'
import { IconContext } from "react-icons";
import { useEffect, useRef, useState } from 'react'
import { MdDeleteForever, MdAdd } from 'react-icons/md'
import { CiWarning } from 'react-icons/ci';
import TodoList from '../components/TodoList';
import { motion } from 'framer-motion';


export default function Home() {
    const inpList = useRef();
    const inpEl = useRef();
	const [errorMessage, setErrorMessage] = useState(null);
	const [showMessage, setShowMessage] = useState(true);

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
		setShowMessage(true);
        const val = inpList.current.value;
		if (!val) {
			// Set the error message in the component's state
			console.log("invalid input, empty");
			setErrorMessage('Name The List!');
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
			console.log("invalid input, taken name");
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

    return (
        <>
            <div className='flex-grow flex justify-center transition ease-linear duration-150 bg-pritxt dark:bg-pribg'>
                <div className='mx-auto w-full h-fit'>
                    <div className='max-w-4xl w-full mx-auto p-4 flex-col items-center justify-center'>
						{errorMessage ?
						<motion.div
							initial={{opacity: showMessage? 0: 1}}
							animate={{opacity: showMessage? 1: 0}}
							transition={{duration: .3}}
							className='p-2 my-3 text-red-600 text-lg font-semibold font-mono flex items-center justify-center'> 
							{errorMessage}
						</motion.div> :
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{duration: .2}}
							className='p-2 my-3 text-lg xsm:text-base font-semibold font-mono flex items-center justify-center'> 
							Pick a name for your list!
						</motion.div>}
						<form className=' w-full flex justify-center' onSubmit={(e) => {
							addLists(e)
							setTimeout(() => {
								setShowMessage(false);
							}, 2500);
							setTimeout(() => {
								setErrorMessage(null);
							},2900);
							}}>
							<input className='max-w-[400px] w-full transition-all duration-150 bg-white text-pribg dark:bg-secbg dark:text-pritxt outline-none focus:outline-none tracking-wide uppercase font-semibold p-3 px-4 shadow-lg rounded-md sm:flex-1 xsm:flex-grow' 
								autoFocus
								type="text"
								placeholder="type here..."
								ref={inpList}/>
							{/* <input type="submit" className='transition duration-150 ease-linear bg-white text-pribg dark:bg-secbg dark:text-pritxt focus:outline-none tracking-wide font-semibold p-2 ml-3 shadow-lg rounded-md px-2' value={"Add"}/> */}
						</form>
                    </div>
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
