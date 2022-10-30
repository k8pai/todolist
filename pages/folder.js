import Head from 'next/head'
import Image from 'next/image'
import { IconContext, icons } from "react-icons";
import { useEffect, useRef, useState } from 'react'
import { RiRadioButtonLine } from 'react-icons/ri';
import { MdDeleteForever, MdPendingActions, MdDownloadDone, MdFolderShared } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import DoneList from '../components/DoneList';
import TodoList from '../components/TodoList';

export default function folder() {
    const folderName = useRef();

    useEffect(() => {
        const value = localStorage.getItem('projects');
        setFolder(value ? JSON.parse(value) : []);
    }, [])
    
    const selected = useState("");
    const [folder, setFolder] = useState([]);
    
    const insFolders = (e) => {
        e.preventDefault();
        const val = folderName.current.value;
        const initial = [];
        const res = [...folder, {
            id: folder.length+1,
            name: val,
            folder: true,
        }]
        setFolder(res);
        localStorage.setItem(`items[${val}]`, JSON.stringify(initial))
        localStorage.setItem('projects', JSON.stringify(res));
    }

    const deleteFolder = (ind) => {
        const next = folder.filter((item) => item.id != ind);
        setFolder(next);
        localStorage.setItem('projects', JSON.stringify(next));
    }
    return (
        <>
            <div className='w-full max-w-full overflow-x-hidden mx-auto h-full'>
                <div className='bg-slate-500 h-[200px] w-full'>
                    
                </div>
                <div className='w-full mx-auto h-fit'>
                    <div className='p-4 flex justify-center'>
                        <form onSubmit={insFolders}>
                            {/* <label for="todo">Insert here</label> */}
                            <input className='form-input tracking-wide capitalize font-semibold p-2 rounded-md px-2 w-5xl' focus='true' type="text" placeholder="what's on your mind?" size="50" ref={folderName}/>
                            {/* <button onClick={(e) => {
                                e.preventDefault();
                                inpEl.current.value = "";
                                document.getElementById("todo").focus();
                            }} ><FiDelete /></button> */}
                            <input className='form-input tracking-wide capitalize font-semibold p-2 rounded-md px-2 w-5xl mx-3' type={"submit"} />
                        </form>
                    </div>
                    <div className='flex overflow-x-scroll'>
                    <select className='form-select'>
                        {
                            folder.map(item => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))
                        }
                        
                    </select>
                    {
                        folder.map((lis) => (
                            <div key={lis.id} className='mt-10 px-4 m-4 max-w-md rounded-md border border-black'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='font-semibold tracking-widest outline-none text-blue-400 text-lg p-2' contentEditable="true">{lis.name}</h1>
                                    <button className='mr-2' onClick={(e) => {
                                        e.preventDefault();
                                        deleteFolder(lis.id);
                                    }}><IconContext.Provider value={{ color: "red", size: "1.4em", className: "global-class-name" }}>
                                        <MdDeleteForever />
                                    </IconContext.Provider></button>
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                    </div>
                    
                </div>
            </div>
        </>
    )
}
