import Link from 'next/link';
import React from 'react';
import {
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiGithub,
	SiTwitter,
	SiInstagram,
	SiLinkedin,
	SiDiscord,
	SiGmail,
} from 'react-icons/si';
import { SlLocationPin } from 'react-icons/sl';
import { TbBrandNextjs } from 'react-icons/tb';
import SocialsAbout from '../components/SocialsAbout';
import ToolsAbout from '../components/ToolsAbout';

export async function getStaticProps() {
	const user = {
		name: 'sudarsan pai',
		twitter: '@k8pai',
		location: 'Bangalore, India',
		about: `I\'m sudarsh, a Front-end developer based on bangalore, and obviously i love to code. Nothing much to add for now, just learning stuff, getting started with Nextjs and some js libraries.`,
		project: `A simple todo-list web app, that can be used to manage tasks and todos. This project was made to be part of my portfolio building.`,
	};

	return {
		props: {
			user,
		},
	};
}

export default function about({ user }) {
	const socials = [
		{
			href: 'https://github.com/k8pai',
			component: SiGithub,
		},
		{
			href: 'https://twitter.com/k8pai',
			component: SiTwitter,
		},
		{
			href: 'https://instagram.com/_k8pai',
			component: SiInstagram,
		},
		{
			href: 'https://linkedin.com/in/k8pai',
			component: SiLinkedin,
		},
		{
			href: 'mailto:thek8pai@gmail.com',
			component: SiGmail,
		},
		{
			href: 'https://discord.com/users/898949804024012850',
			component: SiDiscord,
		},
	];

	const tools = [
		{
			component: SiNextdotjs,
			link: 'https://nextjs.org/',
			name: 'Nextjs',
		},
		{
			component: TbBrandNextjs,
			link: 'https://github.com/pacocoursey/next-themes',
			name: 'Next-themes',
		},
		{
			component: SiTailwindcss,
			link: 'https://tailwindcss.com/',
			name: 'tailwindcss',
		},
		{
			component: SiReact,
			link: 'https://react-icons.github.io/react-icons/',
			name: 'React-icons',
		},
	];

	return (
		<div className="flex-grow max-w-3xl w-full h-full flex flex-col justify-center mx-auto transition-all duration-150 ease-in">
			<div className="p-3 space-y-6 flex flex-col items-start">
				<div className="username space-y-2 mx-4">
					<h2 className="text-xl text-pribg dark:text-cyan-200 font-semibold">
						{user.name}
					</h2>
					<div className="userinfo flex items-center space-x-6">
						<div className="">
							<Link
								className="text-pribg dark:text-cyan-100"
								href={'https://twitter.com/k8pai'}
							>
								{user.twitter}
							</Link>
						</div>
						<div className="flex items-center space-x-2">
							<SlLocationPin />
							<h4 className="text-pribg dark:text-cyan-100">
								{user.location}
							</h4>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap items-center mx-4">
					{socials.map((el, elXid) => {
						return (
							<SocialsAbout
								key={elXid}
								link={el.href}
								Component={el.component}
							/>
						);
					})}
				</div>

				<div className="aboutme space-y-3 mx-4">
					<h1 className="text-xl text-pribg dark:text-cyan-200 font-semibold">
						About Me.
					</h1>
					<p className="text-pribg dark:text-sectxt tracking-wide word-0 text-lg sm:text-base xsm:text-base">
						{user.about}
					</p>
				</div>

				<div className="aboutme space-y-3 mx-4">
					<h1 className="text-xl text-pribg dark:text-cyan-200 font-semibold">
						About Project.
					</h1>
					<p className="text-pribg dark:text-sectxt tracking-wide word-0 text-lg sm:text-base xsm:text-base">
						{user.project}
					</p>
				</div>

				<div className="aboutme space-y-3 mx-4">
					<h1 className="text-xl text-pribg dark:text-cyan-200 font-semibold">
						Tools Used.
					</h1>
					<ul className="space-y-3 text-terbg dark:text-sectxt text-lg sm:text-base xsm:text-base">
						{tools.map(({ link, name, component }, elXid) => {
							return (
								<ToolsAbout
									key={elXid}
									link={link}
									name={name}
									Component={component}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
