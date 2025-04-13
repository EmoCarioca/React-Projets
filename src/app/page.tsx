"use client"
import { useState } from "react"
import { usePost, userPosts } from "@/utils/queries"

const pag = () => {
    const [posts, setPosts] = useState(false)
    const postss = userPosts()
    const postItem = usePost(10)    

    const TruoF = () => {
        if (!posts) {
            setPosts(true)
        } else {
            setPosts(false)
        }
    }

    return (
        <div className=" flex gap-3">

            <div>
                <button onClick={TruoF} className="hover:cursor-pointer bg-white text-black p-1 rounded-md  ">
                    Show posts</button>
            </div>

            <div>
                {postss.isLoading && <p>Loading...</p>}
                {posts && postss.data &&
                    < ul > {
                        postss.data.map(item => (
                            <li key={item.id} className="mt-1">title:{item.title}</li>
                        ))
                    }</ul>
                }
            </div>
        </div >
    )
}

export default pag