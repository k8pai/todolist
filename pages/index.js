import { useEffect, useState } from 'react'
import { listIdGenerator } from '../lib/generator'
import ListInput from '../components/ListInput'
import TodoCard, { TodoCardLoading } from '../components/TodoCard'
import { Toaster } from 'react-hot-toast'
import axios from '../lib/axios'
import useToggle from '../lib/hooks/useToggle'

const fetFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        return (
            JSON.parse(localStorage.getItem('List')) || [
                { id: '000-00-0000', name: 'default' },
            ]
        )
    }
    return [{ id: '000-00-0000', name: 'default' }]
}

export default function Home() {
    const [lists, setLists] = useState([])
    const { value: loading, setTrue, setFalse, toggle } = useToggle(false)

    useEffect(() => {
        setTrue()
        axios.get('/api/list').then((response) => {
            setLists(response.data)
            setTimeout(() => {
                setFalse()
            }, 10000)
        })
    }, [])

    const addList = (name) => {
        axios
            .post('/api/list', {
                name,
            })
            .then((response) => {
                console.log(response)
                setLists((ref) => [...ref, ...response.data])
            })
        // setLists((prevList) => [...prevList, { id: listIdGenerator(), name }])
    }

    const renameList = (id, name) => {
        setLists((prevList) =>
            prevList.map((list) => {
                if (list._id === id) {
                    return { ...list, name }
                }
                return list
            })
        )
    }

    const deleteList = (id) => {
        console.log('id before delete', id)
        axios
            .delete('/api/list', {
                data: { id },
            })
            .then((response) => {
                console.log(response)
                if (response.acknowledged) {
                    setLists((prevList) =>
                        prevList.filter((el) => el._id !== id)
                    )
                }
                // setLists(response.data)
            })

        // localStorage.removeItem(`tasks[${id}]`)
        // setLists((prevList) => prevList.filter((el) => el.id !== id))
    }

    return (
        <>
            <div className="flex-grow flex justify-center bg-pritxt dark:bg-pribg">
                <div className="mx-auto w-full h-fit">
                    <ListInput {...{ addList }} />
                    <div className="mt-[50px] flex flex-wrap justify-center md:justify-start">
                        {/* {isMounted && */}

                        {loading
                            ? [1, 2, 3, 4]?.map((item) => (
                                  <TodoCardLoading key={`loading-${item}`} />
                              ))
                            : lists?.map((item) => (
                                  <TodoCard
                                      key={item._id}
                                      item={item}
                                      {...{ renameList, deleteList }}
                                  />
                              ))}
                        {/* } */}
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    className: 'bg-sectxt dark:bg-secbg text-white',
                    style: {
                        color: 'ghostwhite',
                    },
                }}
            />
        </>
    )
}
