import Link from 'next/link'
import React from 'react'
import { IconContext } from 'react-icons'
import { SiAboutdotme, SiGithubactions, SiGithub, SiTwitter, SiDiscord } from 'react-icons/si'
import { FaCode } from 'react-icons/fa'

export default function Footer() {
  return (
	<div>
		<div className='max-w-5xl h-fit mx-auto text-pribg dark:text-pritxt p-4'>
			<ul className='flex justify-center items-center space-x-3'>
				<Link className='transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'https://github.com/k8pai/todolist'}>
					<IconContext.Provider value={{ size: "1.4em", className: "global-class-name" }}>
						<FaCode />
					</IconContext.Provider>
				</Link>
				<Link className='transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'https://github.com/k8pai'}>
					<IconContext.Provider value={{ size: "1.4em", className: "global-class-name" }}>
						<SiGithub />
					</IconContext.Provider>
				</Link>
				<Link className='transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'https://twitter.com/k8pai'}>
					<IconContext.Provider value={{ size: "1.4em", className: "global-class-name" }}>
						<SiTwitter />
					</IconContext.Provider>
				</Link>
				<Link className='transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' href={'https://discord.com'}>
					<IconContext.Provider value={{ size: "1.4em", className: "global-class-name" }}>
						<SiDiscord />
					</IconContext.Provider>
				</Link>
			</ul>
		</div>
	</div>
  )
}
