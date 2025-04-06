"use client"
import { useState, useEffect } from "react"
type Users = { id: string; name: string; email: string; address: { city: string; } }
export const pag = () => {
    const [users, setUsers] = useState<Users[]>([])
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    const handleAddPost = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    title: 'Test post',
                    body: 'Test body',
                    userId: 9999,
                })
            })
            const newPost = await res.json()
            //setPosts(prevPosts => [newPost, ...prevPosts]) Commented 'cause can't use the post method in fakeapi

            console.log('New post added:', newPost)
        } catch (err) {
            console.error('Error adding post:', err)
        }
    }



    const getUsers = async () => {
        setLoading(true)
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await res.json()
            setUsers(json)
        } catch (err) {
            console.error(err)
        }
        setLoading(false)

    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div className="container mx-auto">
            <button onClick={handleAddPost}>Add new post</button>
            <h1 className="text-2xl">simple chat</h1>
            {loading && <p>Loading...</p>}
            {!loading && users.length > 0 &&
                <ul>
                    {users.map((it) => (
                        <li key={it.id}>{it.name} <strong>-</strong> ({it.email}) - ({it.address.city})</li>
                    ))}
                </ul>
            }
            {!loading && users.length === 0 && <p>No users found</p>}
        </div>
    )
}

export default pag