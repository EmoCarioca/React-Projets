'use client'

import { useReducer, useState } from "react"
import { listR } from "@/exerciciosconc/reducers/listR"

export const pag = () => {
    const [list, dispatch] = useReducer(listR, [])
    const [edit, setEdit] = useState('')
    const [addf, setAddf] = useState('')

    const addI = () => {
        if (addf.trim() === '') return false
        dispatch({ type: 'add', payload: { text: addf.trim() } })
        setAddf('')
    }

    const rmv = (id: number) => {
        if (!window.confirm('Are you sure?')) return false
        dispatch({ type: 'remove', payload: { id } })
    }

    const esdit = (id: number) => {
        const item = list.find(t => t.id === id)
        if (!item) return false
        if (item) {
            const newT = window.prompt('Edit item', item.text)
            if (!newT || newT.trim() === '') return false
            dispatch({ type: 'edit', payload: { id, newT: newT.trim() } })
        }
    }

    const handd = (id: number) => {
        dispatch({ type: 'toggle', payload: { id } })
    }


    return (
        <div className="container mx-auto">
            <h1 className="text-2xl text-center">sup</h1>
            <div className="flex border border-gray-400 bg-gray-800 p-4 my-4 rounded-md">
                <input type="text" className="flex-1 outline-none max-w-2xl mx-auto border rounded-md border-white p-3 bg-transparent text-white"
                    placeholder="Whire a item" value={addf} onChange={e => setAddf(e.target.value)} />
                <button className="p-4" onClick={addI}>Add</button>
            </div>
            <ul className="max-w-2xl mx-auto">
                {list.map((t) => (
                    <li key={t.id}
                        className="flex p-3 my-3 border-b border-gray-700 items-center">
                        <input type="checkbox" className="w-4 h-4 " checked={t.done} onClick={() => handd(t.id)} />
                        <p className="flex-1 text-lg">{t.text}</p>
                        <button onClick={() => esdit(t.id)} className="mx-4 hover:text-gray-500">edit</button>
                        <button onClick={() => rmv(t.id)} className="mx-4 hover:text-gray-500">remove</button>

                    </li>
                ))}
            </ul>
        </div>
    )
}


export default pag