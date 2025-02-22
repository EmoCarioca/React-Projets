import { useEffect, useState } from "react"
import { Item } from "@/assets/exerciciosconc/reducers/items"
export const Square = () => {

    const [list, setL] = useState<Item[]>([])
    const addNew = (text: string) => {
        setL([...list, {
            id: list.length,
            text,
            done: false
        }])
    }

    const editT = (id: number, newT: string) => {
        setL(list.map((t) => {
            if (t.id === id) t.text = newT
            return t

        }))

    }

    const Toggle = (id: number) => {
        setL(list.map((t) => {
            if (t.id === id) t.done = !t.done
            return t

        }))
    }

    const remove = (id: number) => {
        setL(list.filter((t) => t.id !== id))
    }

    return (
        <div>
            <div className="w-40 h-40 bg-red-400"></div>
        </div>
    )


}