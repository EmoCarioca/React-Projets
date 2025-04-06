import { Uchat } from "./chat";
import { ChatCtx } from './chat';
import { UUser } from "./userco";

export const Chatmsg = () => {
    const ChatCtx = Uchat()
    const User = UUser()
    return (
        <div className="flex flex-col gap-1">
            {ChatCtx?.chat.map(Item => (
                <div
                    key={Item.id} className={`border border-white/20 rounded-md text-sm p-2
                    ${Item.user === User?.user ? 'self-end bg-white/10' : 'self-start bg-white/5'} `}>
                    <div className="font-bold text-right">{Item.user}</div>
                    <div className="text-left">{Item.text}</div>
                </div>
            ))}
        </div>
    )
}