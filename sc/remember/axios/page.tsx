"use client"
import { api } from "@/utils/api"
import { useRef } from "react"
import axios from "axios"

const pag = () => {
    const fileIpt = useRef<HTMLInputElement>(null)
    const handSendF = async () => {
        if (fileIpt.current?.files && fileIpt.current.files.length > 0) {
            const file = fileIpt.current.files[0]

            const data = new FormData()
            data.append("name", 'carioca')
            data.append("file", file)

            const response = await axios.post("/posts", data)
        }
    }

    return (
        <div>
            <input type="file" ref={fileIpt} />
            <button onClick={handSendF}>Send</button>
        </div>
    )
}

export default pag