import { PostContext } from "@/app/data/listp"
import { useContext } from "react"

export const Footer = () => {
    const postctx = useContext(PostContext)
    return (
        <footer>
            <p>tot posts: {postctx?.post.length}</p>
        </footer>
    )
}