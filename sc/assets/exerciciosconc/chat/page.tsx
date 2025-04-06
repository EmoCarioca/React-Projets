"use client"

import { ChatProvider } from "@/components/cpnts/chat"
import { UserProvider } from "./userco"
import { Chat } from './../components/cpnts/Chatt';


export const pag = () => {
    return (
        <div className="container mx-auto max-w-lg px-2">
            <UserProvider>
                <ChatProvider>
                    <h1 className="text-3xl my-3 text-center ">simple chat</h1>
                    <Chat />
                </ChatProvider>
            </UserProvider>
        </div>
    )
}

export default pag