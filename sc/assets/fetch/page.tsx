"use client"
import axios from "axios"

export const pag = () => {
    const HDPN = async () => {

        const requestParams = {
            postId: 1,
            sort:'desc'
        }
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {params:requestParams})
        console.log(response.data)  
            
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl mt-4">Upload image</h1>
            <button onClick={HDPN}>Get Posts</button>
        </div>
    )

}

export default pag