import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FaHeart } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { GoSignOut } from 'react-icons/go'
import React, { useEffect, useState } from 'react'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { SiAboutdotme, SiHomeadvisor } from 'react-icons/si'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header() {
	const {systemTheme, theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, [])
	const renderThemeSystem = () => {
	if(!mounted) return null; 

	const currTheme = theme  === 'system' ? systemTheme : theme;

	if(currTheme == "dark"){
		return(
			<button className='transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-white' onClick={() => { setTheme('light') }}>
			<IconContext.Provider value={{ color: "white", size:"1.4em", className: "global-class-name" }}>
				<BsSunFill />
			</IconContext.Provider></button>
		)
	}else {
		return (
			<button className='transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg' onClick={() => { setTheme('dark') }}>
				<IconContext.Provider value={{ color: "black", size:"1.4em", className: "global-class-name" }}>
					<BsMoonStarsFill />
				</IconContext.Provider>
			</button>
		)
	}
	}  
	// function SignedOrNot(){
	// 	const { data: session } = useSession()
	// 	if(session){
	// 		return(
	// 			<button className='transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' onClick={() => signOut()}>
	// 				<IconContext.Provider value={{ size:"1.4em", className: "global-class-name" }}>
	// 					<GoSignOut />
	// 				</IconContext.Provider>
	// 			</button>
	// 		)
	// 	}
	// }
	return (
		<div>
<<<<<<< HEAD
			<div className='max-w-2xl h-fit mx-auto text-pribg dark:text-pritxt p-4 py-6'>
=======
			<div className='max-w-5xl h-fit mx-auto text-pribg dark:text-pritxt p-4'>
>>>>>>> parent of 1019e6e ( 🚀 updated about page contents)
				<ul className='flex justify-end space-x-3'>
					<Link className='transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'/'}>
						<IconContext.Provider value={{ size: "1.4em", className: "global-class-name" }}>
							<SiHomeadvisor />
						</IconContext.Provider>
					</Link>
					<Link className='transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'/about'}>
						<IconContext.Provider value={{ size: "1.4em", className: "global-class-name" }}>
							<SiAboutdotme />
						</IconContext.Provider>
					</Link>
					{/* <Link className='transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'/greetbook'}>
						<IconContext.Provider value={{ size: "1.4em", className: "global-class-name" }}>
							<FaHeart />
						</IconContext.Provider>
					</Link> */}
					<span className='flex-grow'></span>
					{/* {SignedOrNot()} */}
					{renderThemeSystem()}
				</ul>
			</div>
		</div>
	)
}