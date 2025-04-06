import { ChatReducer } from "./chatR";
import { Message } from "./message";
import { createContext, useReducer, ReactNode, useContext } from "react";

type ChatCtx = {
    chat: Message[];
    addmsg: (user: string, text: string) => void;
}
export const ChatCtx = createContext<ChatCtx | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
    const [chat, dispatch] = useReducer(ChatReducer, []);

    const addmsg = (user: string, text: string) => {
        dispatch({
            type: 'add',
            payload: { user, text }
        })
    }

    return (
        <ChatCtx.Provider value={{ chat, addmsg }}>{children}</ChatCtx.Provider>
    )
}

export const Uchat = () => useContext(ChatCtx);