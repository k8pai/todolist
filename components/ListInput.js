import React, { useEffect, useState } from 'react';
import TiNotifier from './TiNotifier';
import { HiX } from 'react-icons/hi';

const ListInput = ({ addList }) => {
	const [show, setShow] = useState(false);
	const [err, setErr] = useState({
		style: {
			indicator: 'text-red-400',
			color: 'text-red-400',
			bg: 'bg-white dark:bg-secbg',
		},
		message: '',
		status: null,
	});
	const [mounted, setMounted] = useState(true);
	const [name, setName] = useState('');

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		setShow(true);
	}, [mounted]);

	const addLists = (val) => {
		if (!val) {
			if (!err.status) {
				setErr((el) => ({
					...el,
					Component: HiX,
					message: `Name can't be left empty!`,
					status: true,
				}));
				setTimeout(() => {
					setErr((el) => ({ ...el, status: false }));
				}, 1750);
			}
			return;
		}

		const currList = JSON.parse(localStorage.getItem('List')) || [];
		let names = currList.map((data) => data.name) || [];
		if (names.includes(val)) {
			if (!err.status) {
				setErr((el) => ({
					...el,
					Component: HiX,
					message: `List Exist, Try Another Name!`,
					status: true,
				}));
				setTimeout(() => {
					setErr((el) => ({ ...el, status: false }));
				}, 1750);
			}
			return;
		}
		addList(val);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addLists(name);
		setName('');
	};

	return (
		<div className="max-w-4xl w-full mx-auto p-4 flex justify-center">
			<form
				className="w-full flex flex-col items-center justify-center"
				onSubmit={handleSubmit}
			>
				<input
					className="max-w-[400px] w-full mx-auto bg-white text-pribg dark:bg-secbg dark:text-pritxt outline-none focus:outline-none tracking-wide uppercase font-semibold p-3 px-4 shadow-lg rounded-md"
					autoComplete="off"
					type="text"
					name={'inpList'}
					placeholder="type here..."
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label
					htmlFor={'inpList'}
					className="p-2 my-3 text-md xsm:text-base font-normal font-mono flex items-center justify-center"
				>
					Pick a name for your list!
				</label>
			</form>

			{show && (
				<TiNotifier
					Component={err.Component}
					style={err.style}
					message={err.message}
					visible={err.status}
				/>
			)}
		</div>
	);
};

export default ListInput;
