import { Posts } from "@/app/data/listpt"
import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { poT } from "@/reducers/postreducer"
import { stringify } from "querystring"

const STORAGE_KEY = 'postctc'

type PostCt = {
    post: Posts[]
    addp: (title: string, body: string) => void
    remp: (id: number) => void
}
export const PostContext = createContext<PostCt | null>(null)

export const PostProvider = ({ children }: { children: ReactNode }) => {
    const [post, dispactch] = useReducer(
        poT,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))

    const addp = (title: string, body: string) => {
        dispactch({ type: 'add', payload: { title, body } })
    }

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(post))
    }, [post])

    const remp = (id: number) => {
        dispactch({
            type: 'remove',
            payload: { id }
        })
    }

    return (
        <PostContext.Provider value={{ post, addp, remp }}>
            {children}
        </PostContext.Provider>
    )
}