import React, { useEffect, useState } from 'react';
import TodoHeader from './TodoHeader';
import { todoIdGenerator } from '../lib/generator';
import TodoItems from './TodoItems';
import InputTodoItem from './InputTodoItem';

const TodoCard = ({ item, renameList, deleteList }) => {
	const [todoItems, setTodoItems] = useState(() => {
		if (typeof window !== 'undefined') {
			return JSON.parse(localStorage.getItem(`tasks[${item.id}]`)) || [];
		}
		return [];
	});

	useEffect(() => {
		localStorage.setItem(`tasks[${item.id}]`, JSON.stringify(todoItems));
	}, [todoItems]);

	const addItem = (val) => {
		if (val !== '') {
			const data = {
				id: todoIdGenerator(),
				task: val,
				done: false,
			};
			setTodoItems((values) => [data, ...values]);
		}
	};

	const deleteItem = (ind) => {
		setTodoItems((value) => value.filter((el) => el.id !== ind));
	};

	const moveToDone = (uniqId) => {
		const data = todoItems.map((el) => {
			if (el.id === uniqId) {
				return { ...el, done: !el.done };
			}
			return el;
		});
		setTodoItems(data);
	};

	const todoHeaderProps = { renameList, deleteList };
	const todoItemsProps = { addItem, deleteItem, moveToDone };
	const inputTodoItemProps = { addItem };
	return (
		<div className="m-3 px-4 h-fit max-w-sm w-full sm:flex-grow xsm:flex-grow rounded-md border shadow-2xl transition duration-150 bg-[#fff] dark:border-none dark:shadow-lg dark:bg-secbg">
			<TodoHeader item={item} {...todoHeaderProps} />
			<hr />
			<div className="transition duration-300 ease-linear">
				<ul className="pb-2 list-none text-md font-medium font-sans tracking-wide capitalize min-w-2xl">
					<InputTodoItem {...inputTodoItemProps} />
					{todoItems.map((el) => (
						<TodoItems key={el.id} elem={el} {...todoItemsProps} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default TodoCard;
