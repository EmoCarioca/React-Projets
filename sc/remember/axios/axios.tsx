"use client"
import axios from "axios"

const pag = () => {
    const controller = new AbortController

    const handStartRq = async () => {
        try {   
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                signal: controller.signal
            })
        } catch (error) {
            console.log("There was a problem" + error)
        }

    }

    const handCancelRq = async () => {
        controller.abort()
    }

    return (
        <div className="container mx-auto flex gap-3">
            <button onClick={handStartRq}>Send</button>
            <button onClick={handCancelRq}>Cancel</button>
        </div>
    )
}

export default pag