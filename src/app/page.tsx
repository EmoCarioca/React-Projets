"use client"
import { api } from "@/utils/api"

const pag = () => {
    const handleaddP = async () => {
        const response = await api.post("/posts", {
            userId: 99,
            title: 'teste',
            body: 'teste'
        })

        if (response.data.id) {
            console.log('esta certo')
        } else {
            console.log('esta errado')
        }

    }

    return (
        <div>
            <button onClick={handleaddP}>Pega posts</button>
        </div>
    )
}

export default pag