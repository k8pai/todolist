// import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

export default function greetBook() {
	const greetInp = useRef();

	function SignedOrNot() {
		const { data: session } = useSession()
		if (session) {
		return (
			<>
			{session.user.id} <br />
			{session.user.name} <br />
			{session.user.email} <br />
			<input className='bg-white w-full text-pribg dark:bg-terbg dark:text-pritxt focus:outline-none tracking-wide capitalize font-semibold p-2 pl-3 shadow-lg rounded-md px-2 w-5xl' 
				autoFocus 
				type="text" 
				placeholder="Leave a message..." 
				ref={greetInp}/>
			</>
		)
		}
		return (
		<>
			{/* Not signed in <br /> */}
			<button className='transition duration-200 p-2 px-4 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt' onClick={() => signIn('github')}>Sign in</button>
		</>
		)
	}	
  return (
    <div className='flex-grow'>
        <div className='max-w-2xl w-full mx-auto font-semibold'>
			<div className='m-5 space-y-3'>
				<h1 className='tracking-widest text-2xl md:text-xl sm:text-lg xsm:text-lg'>Guestbook</h1>
				<p className='text-pribg dark:text-sectxt tracking-wide word-0 text-lg sm:text-base xsm:text-base'>Inspired by one of the best out there... <Link href={"https://leerob.io/"}>Lee Robinson</Link></p>
			</div>
			<div className='p-5 m-2 sm:mx-2 sm:my-1 xsm:mx-2 xsm:my-1 max-w-3xl flex items-center rounded-md shadow-2xl bg-pritxt dark:bg-secbg h-fit'>
				<div className='space-y-4'>
					<h1 className='tracking-widest text-center text-2xl md:text-xl sm:text-lg xsm:text-lg'>Guestbook</h1>
					<p className='text-pribg dark:text-sectxt tracking-wide word-0 text-lg sm:text-base xsm:text-base'>Leave a comment below. It could be anything – appreciation, information, wisdom, or even humor. Surprise me!</p>
					{SignedOrNot()}
				</div>
			</div>
        </div>
    </div>
  )
}
