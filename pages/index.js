import { useEffect, useState } from 'react';
import { listIdGenerator } from '../lib/generator';
import ListInput from '../components/ListInput';
import TodoCard from '../components/TodoCard';

export default function Home() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const [lists, setLists] = useState(() => {
		if (typeof window !== 'undefined') {
			return (
				JSON.parse(localStorage.getItem('List')) || [
					{ id: '000-00-0000', name: 'default' },
				]
			);
		}
		return [{ id: '000-00-0000', name: 'default' }];
	});

	useEffect(() => {
		localStorage.setItem('List', JSON.stringify(lists));
	}, [lists]);

	const addList = (newName) => {
		const data = { id: listIdGenerator(), name: newName };
		setLists([...lists, data]);
	};

	const renameList = (id, newName) => {
		const updatedList = lists.map((item) => {
			if (item.id === id) {
				return { ...item, name: newName };
			}
			return item;
		});

		setLists(updatedList);
	};

	const deleteList = (id) => {
		localStorage.removeItem(`tasks[${id}]`);
		setLists((val) => val.filter((el) => el.id !== id));
	};

	const todoHeaderProps = { addList };
	const InputTodoNameProps = { renameList, deleteList };
	return (
		<>
			<div className="flex-grow flex justify-center transition ease-linear duration-150 bg-pritxt dark:bg-pribg">
				<div className="mx-auto w-full h-fit">
					<ListInput {...todoHeaderProps} />
					<div className="mt-[50px] flex flex-wrap xsm:justify-center sm:justify-center md:justify-center">
						{isMounted &&
							lists?.map((item) => (
								<TodoCard
									key={item.id}
									item={item}
									{...InputTodoNameProps}
								/>
							))}
					</div>
				</div>
			</div>
		</>
	);
}
