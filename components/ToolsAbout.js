import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';

export default function ToolsAbout({ name, Component, link }) {
	return (
		<div className="flex items-center space-x-2">
			<IconContext.Provider value={{ size: '1.2em' }}>
				<Component />
			</IconContext.Provider>
			<Link
				className="transition duration-200 text-blue-400 hover:cursor-pointer hover:text-blue-600"
				href={link}
			>
				{name}
			</Link>
		</div>
	);
}
