import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function about() {
  return (
    <div className='flex-grow flex items-center transition-all duration-150 ease-in'>
        <div className='max-w-7xl w-full mx-auto font-semibold flex flex-wrap justify-center'>
			<div className='p-5 m-2 sm:mx-2 sm:my-1 xsm:mx-2 xsm:my-1 max-w-3xl flex items-center rounded-md shadow-lg transition-all duration-200 ease-out bg-pritxt dark:bg-secbg h-fit'>
				<div className='space-y-3'>
					<h1 className='tracking-widest text-center text-2xl md:text-xl sm:text-lg xsm:text-lg text-pribg dark:text-pritxt'>About Dev</h1>
					<p className='text-pribg dark:text-sectxt tracking-wide word-0 text-lg sm:text-base xsm:text-base'>I&apos;m sudarsh, a Front-end developer based on bangalore, and obviously i love to code. Nothing much to add for now, just learning stuff, getting started with Nextjs and some js libraries.</p>
				</div>
				<div className='min-w-[200px] sm:hidden xsm:hidden '>
					<Image
						className='rounded-full p-3'
						src={'/pic.png'}
						width="200"
						height="200"
						alt='dev picture' />
				</div>
			</div>
			<div className='p-5 m-2 sm:mx-2 sm:my-1 xsm:mx-2 xsm:my-1 my-1 w-fit rounded-md tracking-wide space-y-3 shadow-lg transition-all duration-200 ease-out bg-pritxt dark:bg-secbg h-fit'>
				<h1 className=' text-center text-2xl md:text-xl sm:text-lg xsm:text-lg text-pribg dark:text-pritxt'>About Project</h1>
				<div className='text-pribg dark:text-sectxt text-lg sm:text-base xsm:text-base'>
					<p className=''>A simple todo-list web app, that can be used to manage tasks and todos.</p>
					<p className=''>This project was made to be part of my portfolio building.</p>
				</div>
			</div>
			<div className='p-5 m-2 sm:mx-2 sm:my-1 xsm:mx-2 xsm:my-1 w-fit space-y-3 rounded-md tracking-wide shadow-lg transition-all duration-200 ease-out bg-pritxt dark:bg-secbg h-fit'>
				<h1 className='text-center text-pribg dark:text-pritxt text-2xl md:text-xl sm:text-lg xsm:text-lg'>Tools used</h1>
				<ul className='text-terbg dark:text-sectxt text-lg sm:text-base xsm:text-base'>
					<h1 className=''><Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://nextjs.org/"}> Nextjs</Link> - Framework.</h1>
					{/* <h1 className=''><Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://next-auth.js.org/"}> Next-auth</Link> - Authorization.</h1> */}
					<h1 className=''><Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://github.com/pacocoursey/next-themes"}> Next-themes</Link> - For Themes.</h1>
					<h1 className=''><Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://tailwindcss.com/"}> tailwindcss</Link> - Customizing UI.</h1>
					<h1 className=''><Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://react-icons.github.io/react-icons/"}> React-icons</Link> - To Generalize theme icons.</h1>
					<h1 className=''><Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://jaketrent.github.io/react-social-icons/"}> React-social-icons</Link> - For social link icons.</h1>
				</ul>
			</div>
        </div>
    </div>
  )
}
