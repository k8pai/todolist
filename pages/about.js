import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconContext } from 'react-icons'
import { SiNextdotjs, SiReact, SiTailwindcss, SiGithub, SiTwitter, SiInstagram, SiLinkedin, SiDiscord, SiGmail } from 'react-icons/si'
import { SlLocationPin } from 'react-icons/sl'
import { TbBrandNextjs } from 'react-icons/tb'

export default function about() {
	return (
		<div className='flex-grow max-w-3xl w-full h-full flex flex-col justify-center mx-auto transition-all duration-150 ease-in'>
			<div className='p-3 space-y-6 flex flex-col items-start'>
				<div className='username space-y-2 mx-4'>
					<h2 className='text-xl text-pribg dark:text-cyan-200 font-semibold'>sudarsan pai</h2>
					<div className='userinfo flex items-center space-x-6'>
						<div className=''>
							<Link className='text-pribg dark:text-cyan-100' href={'https://twitter.com/k8pai'}>&#64;k8pai</Link>
						</div>
						<div className='flex items-center space-x-2'>
							<SlLocationPin />
							<h4 className='text-pribg dark:text-cyan-100'>Bangalore, India</h4>
						</div>				
					</div>
				</div>
					
				<div className='flex flex-wrap items-center mx-4'>
					<Link className='transition duration-200 p-2 m-1 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'https://github.com/k8pai'}>
						<IconContext.Provider value={{ size: "1.2em", className: "global-class-name" }}>
							<SiGithub />
						</IconContext.Provider>
					</Link>
					<Link className='transition duration-200 p-2 m-1 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'https://twitter.com/k8pai'}>
						<IconContext.Provider value={{ size: "1.2em", className: "global-class-name" }}>
							<SiTwitter />
						</IconContext.Provider>
					</Link>
					<Link className='transition duration-200 p-2 m-1 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'https://github.com/k8pai'}>
						<IconContext.Provider value={{ size: "1.2em", className: "global-class-name" }}>
							<SiInstagram />
						</IconContext.Provider>
					</Link>
					<Link className='transition duration-200 p-2 m-1 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'https://linkedin.com/in/k8pai'}>
						<IconContext.Provider value={{ size: "1.2em", className: "global-class-name" }}>
							<SiLinkedin />
						</IconContext.Provider>
					</Link>
					<Link className='transition duration-200 p-2 m-1 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'mailto:thek8pai@gmail.com'}>
						<IconContext.Provider value={{ size: "1.2em", className: "global-class-name" }}>
							<SiGmail />
						</IconContext.Provider>
					</Link>
					<Link className='transition duration-200 p-2 m-1 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'https://discord.com/users/898949804024012850'}>
						<IconContext.Provider value={{ size: "1.2em", className: "global-class-name" }}>
							<SiDiscord />
						</IconContext.Provider>
					</Link>
				</div>
					
				<div className='aboutme space-y-3 mx-4'>
					<h1 className='text-xl text-pribg dark:text-cyan-200 font-semibold'>About Me.</h1>
					<p className='text-pribg dark:text-sectxt tracking-wide word-0 text-lg sm:text-base xsm:text-base'>I&apos;m sudarsh, a Front-end developer based on bangalore, and obviously i love to code. Nothing much to add for now, just learning stuff, getting started with Nextjs and some js libraries.</p>
				</div>
					
				<div className='aboutme space-y-3 mx-4'>
					<h1 className='text-xl text-pribg dark:text-cyan-200 font-semibold'>About Project.</h1>
					<p className='text-pribg dark:text-sectxt tracking-wide word-0 text-lg sm:text-base xsm:text-base'>A simple todo-list web app, that can be used to manage tasks and todos. This project was made to be part of my portfolio building.</p>
				</div>
				
				<div className='aboutme space-y-3 mx-4'>
					<h1 className='text-xl text-pribg dark:text-cyan-200 font-semibold'>Tools Used.</h1>
					<ul className='space-y-3 text-terbg dark:text-sectxt text-lg sm:text-base xsm:text-base'>
						<div className='flex items-center space-x-2'>
							<IconContext.Provider value={{ size: "1.2em" }}>
								<SiNextdotjs />
							</IconContext.Provider>
							<Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://nextjs.org/"}> Nextjs</Link>
						</div>
						
						<div className='flex items-center space-x-2'>
							<IconContext.Provider value={{ size: "1.2em" }}>
								<TbBrandNextjs />
							</IconContext.Provider>
							<Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://github.com/pacocoursey/next-themes"}> Next-themes</Link>
						</div>
						
						<div className='flex items-center space-x-2'>
							<IconContext.Provider value={{ size: "1.2em" }}>
								<SiTailwindcss />
							</IconContext.Provider>
							<Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://tailwindcss.com/"}> tailwindcss</Link>
						</div>

						<div className='flex items-center space-x-2'>
							<IconContext.Provider value={{ size: "1.2em" }}>
								<SiReact />
							</IconContext.Provider>
							<Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://react-icons.github.io/react-icons/"}> React-icons</Link>
						</div>
						
					</ul>
				</div>
			</div>
		</div>
	)
}
