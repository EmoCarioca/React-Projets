"use client"
import axios from "axios"

export const pag = () => {
    const HDPN = async () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response)
            })
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl mt-4">Upload image</h1>
            <button onClick={HDPN}>Get Posts</button>
        </div>
    )

}

export default pag