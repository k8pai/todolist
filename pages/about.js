import Link from 'next/link'
import React from 'react'

export default function about() {
  return (
    <div>
        <div className='max-w-5xl mx-auto'>
            <div className='navbar p-12'>
                
            </div>
            <div className='project space-y-16'>
                <div className='userinfo flex justify-start items-center'>
                    <div className='flex-row dark:text-pritxt font-fjalla space-y-3'>
                        <h1 className='font-semibold tracking-widest word-1 text-2xl capitalize'>About Project</h1>
                        <div className='text-pribg dark:text-sectxt font-semibold '>
                            <p className='tracking-wide word-0 text-lg'>A simple todo-list web app, that can be used to manage tasks and todos.</p>
                            <p className='tracking-wide word-0 text-lg'>This project was made to be part of my portfolio building.</p>
                        </div>
                        <div className='py-8'>
                            <hr className='bg-pribg dark:bg-pritxt h-[2px]' />
                        </div>
                        <h1 className='font-semibold tracking-widest word-1 text-2xl capitalize'>tools used in this Project</h1>
                        <div className='text-terbg dark:text-sectxt'>
							<h1 className='font-semibold tracking-wide text-lg'> 
								<span className="before:content-['>']"> Framework used for this project is - <Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://nextjs.org/"}>Nextjs</Link>
								</span>
							</h1>
						</div>
                        <div className='py-2'>
                            <hr className='bg-pribg dark:bg-pritxt h-[2px]' />
                        </div>
                        <h1 className='font-semibold tracking-wide text-pribg dark:text-pritxt text-xl'>Tools used</h1>
                        <ul className='text-terbg dark:text-sectxt'>
                            <h1 className='font-semibold tracking-wide text-lg'><Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://react-icons.github.io/react-icons/"}> React-icons</Link> - To Generalize theme icons.</h1>
                            <h1 className='font-semibold tracking-wide text-lg'><Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://jaketrent.github.io/react-social-icons/"}> React-social-icons</Link> - For social link icons.</h1>
                            <h1 className='font-semibold tracking-wide text-lg'><Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://tailwindcss.com/"}> tailwindcss</Link> - Customizing UI.</h1>
                            <h1 className='font-semibold tracking-wide text-lg'><Link className='transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600' href={"https://next-auth.js.org/"}> Next-auth</Link> - Authorization and user appreciation.</h1>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='appreciation'>

            </div>
        </div>
    </div>
  )
}
