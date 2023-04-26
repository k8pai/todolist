import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';

export default function SocialsAbout({ link, Component }) {
	return (
		<Link
			className="transition duration-200 p-2 m-1 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt"
			href={link}
		>
			<IconContext.Provider
				value={{
					size: '1.2em',
					className: 'global-class-name',
				}}
			>
				<Component />
			</IconContext.Provider>
		</Link>
	);
}
