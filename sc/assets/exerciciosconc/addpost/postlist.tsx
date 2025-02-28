import { useContext } from "react"
import { PostContext } from "./listp"
import { Posts } from '@/app/data/listpt';

export const PostList = () => {
    const postCtx = useContext(PostContext)
    return (
        <div>
            {
                postCtx?.post.map(item => (
                    <div key={item.id} className="p-3 border-gray-600 border-t border-b">
                        <div className="text-xl font-bold mb-2">{item.title}</div>
                        <div className="text-sm">{item.body}</div>

                        <button onClick={() => postCtx.remp(item.id)}>[remove]</button>
                    </div>
                ))
            }
        </div >
    )
}