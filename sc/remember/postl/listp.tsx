import { Posts } from "@/app/data/listpt"
import { createContext, ReactNode, useContext, useReducer, useState } from "react"
import { poT } from "@/reducers/postreducer"

type PostCt = {
    post: Posts[]
    addp: (title: string, body: string) => void
    remp: (id: number) => void
}
export const PostContext = createContext<PostCt | null>(null)

export const PostProvider = ({ children }: { children: ReactNode }) => {
    const [post, dispactch] = useReducer(poT, [])

    const addp = (title: string, body: string) => {
        dispactch({ type: 'add', payload: { title, body } })
    }

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

export const usePosts = useContext(PostContext )