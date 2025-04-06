import { useState } from "react"
import { ChatCtx, Uchat } from './chat';

type Props = {
    name: string
}
export const ChatInp = ({ name }: Props) => {
    const [textInpt, setTextipt] = useState('')
    const ChatCtx = Uchat()
    const HDKUP = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key.toLowerCase().trim() === 'enter') {
            ChatCtx?.addmsg(name, textInpt)
            setTextipt('')
        }
    }
    return (
        <input type="text" placeholder={`${name} digite sua mensagem(Aperte enter)`}
            className=" w-full bg-transparent text-md outline-none"
            value={textInpt} onChange={e => setTextipt(e.target.value)} 
            onKeyUp={HDKUP}/>
    )
}