import React, { useEffect, useState } from 'react'
import { HiX } from 'react-icons/hi'
import toast from 'react-hot-toast'

const ListInput = ({ addList }) => {
    const [name, setName] = useState('')

    const addLists = (val) => {
        if (!val) {
            toast.error(`Name can't be left empty!`)

            return
        }

        const currList = JSON.parse(localStorage.getItem('List')) || []
        let names = currList.find((data) => data.name === val)
        if (names) {
            toast.error(`List Exist, Try Another Name!`)

            return
        }
        addList(val)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addLists(name)
        setName('')
    }

    return (
        <div className="max-w-4xl w-full mx-auto p-4 flex justify-center">
            <form
                className="w-full flex flex-col items-center justify-center"
                onSubmit={handleSubmit}
            >
                <input
                    className="max-w-[400px] w-full mx-auto bg-white text-pribg dark:bg-secbg dark:text-pritxt outline-none focus:outline-none tracking-wide font-semibold p-3 px-4 shadow-lg rounded-md"
                    autoComplete="off"
                    type="text"
                    name={'inpList'}
                    placeholder="Create a new list..."
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
        </div>
    )
}

export default ListInput
