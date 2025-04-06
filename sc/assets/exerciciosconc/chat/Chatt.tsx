import { useContext } from "react";
import { UserContext } from "./userco";
import { NameInp } from "./NameInp";
import { ChatInp } from './chatinpt';
import { Chatmsg } from "./chatmsg";

export const Chat = () => {
    const UserCtx = useContext(UserContext)!;
    if (!UserCtx) return null
    if (!UserCtx.user) return <NameInp />

    return (
        <div className="border border-white/30 rounded-m w-full">
            <div className="h-96 p-3 overflow-y-scroll"><Chatmsg /></div>
            <div className="border-t border-t-white/30 p-3"><ChatInp name={UserCtx?.user} />    </div>
            <div className="border-t border-t-white/30 p-3"><ChatInp name='bot' /> </div>

        </div>
    )
}