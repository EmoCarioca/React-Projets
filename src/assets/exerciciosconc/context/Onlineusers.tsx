import { useContext } from "react"
import { CC } from "./Ccontext"

export const Onlineusers = () => {
    const countCtx = useContext(CC)
    const banAll = () => {
        countCtx?.setOnc(0) 
    }
    return (
        <>
            <p>Auline: {countCtx?.onC}</p>
            <button onClick={banAll}>ban all</button>
        </>
    )
}