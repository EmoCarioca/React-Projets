import { useState, KeyboardEvent } from "react"
import { UUser } from "./userco"

export const NameInp = () => {
    const userCtx = UUser()
    const [nameI, setNameI] = useState('')

    function Hdup(event: KeyboardEvent<HTMLInputElement>) {
        if (event.code.toLowerCase() === 'enter') {
            if (nameI.trim() !== '' && nameI.trim().toLowerCase() !== 'bot') {
                userCtx?.setUser(nameI.trim())
            }
        }
    }

    return (
        <div className="mt-14">
            <p className="text-xl mb-4">Qual seu nome?</p>
            <div className="flex gap-3 items-center text-lg">
                <input type="text" placeholder="Digite" className="border-white/30 
                rounded-md px-4 py-3 w-full bg-white/10 outline-none  "
                    value={nameI}
                    onChange={(e) => setNameI(e.target.value)}
                    onKeyUp={Hdup} />
            </div>
        </div>
    )
}
