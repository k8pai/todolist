import React, { useEffect, useState } from 'react'
import TodoHeader from './TodoHeader'
import { todoIdGenerator } from '../lib/generator'
import TodoItems from './TodoItems'
import InputTodoItem from './InputTodoItem'
import axios from '../lib/axios'

const TodoCard = ({ item, renameList, deleteList }) => {
    const [todoItems, setTodoItems] = useState(item.tasks ?? [])

    const addItem = (val) => {
        if (val !== '') {
            axios
                .post('/api/task', {
                    groupId: item._id,
                    name: val,
                    status: false,
                })
                .then((response) => {
                    console.log(response)
                    setTodoItems(response.data)
                })
        }
    }

    const deleteItem = (id) => {
        axios
            .delete('/api/task', {
                data: { id },
            })
            .then((response) => {
                console.log(response)
                if (response.acknowledged) {
                    setTodoItems((prevList) =>
                        prevList.filter((el) => el._id !== id)
                    )
                }
            })
    }

    const moveToDone = (id, status) => {
        axios
            .put('/api/task', {
                id,
                status: !status,
            })
            .then((response) => {
                console.log(response)
                if (response.ok) {
                    setTodoItems((prevList) => {
                        return prevList.map((el) => {
                            if (el._id === id) {
                                return { ...el, status: !response.data?.status }
                            } else {
                                return el
                            }
                        })
                    })
                }
            })
    }

    return (
        <div className="m-3 px-4 h-fit max-w-sm w-full rounded-md border shadow-2xl bg-[#fff] dark:border-none dark:shadow-lg dark:bg-secbg">
            <TodoHeader item={item} {...{ renameList, deleteList }} />
            <hr />
            <div className="transition duration-300 ease-linear">
                <ul className="pb-2 list-none text-md font-medium font-sans tracking-wide capitalize min-w-2xl">
                    <InputTodoItem {...{ addItem }} />
                    {todoItems.map((todoItem) => (
                        <TodoItems
                            key={`${todoItem._id}-${todoItem.status}`}
                            elem={todoItem}
                            {...{ addItem, deleteItem, moveToDone }}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoCard
