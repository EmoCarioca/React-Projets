"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PostProvider } from "./data/listp"
import { PostList } from "./data/postlist"


export const pag = () => {



    return (
        <PostProvider>
            <div className="container mx-auto ">
                <Header />
                <PostList />
                <Footer />
            </div>
        </PostProvider>
    )
}

export default pag