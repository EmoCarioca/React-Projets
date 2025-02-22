import { useContext, useState } from "react"
import { PostContext } from '@/app/data/listp';

export const Header = () => {
    const postCtx = useContext(PostContext)
    const [titleI, setTileI] = useState('')
    const [bodyI, setBodI] = useState('')

    const hanB = () => {
        if (titleI && bodyI) {
            postCtx?.addp(titleI, bodyI)
            setTileI('')
            setBodI('')
        } 

    }
    return (
        <header>
            <h1 className="text-3xl">Titulo da pag</h1>
            <div className="max-w-xl flex flex-col gap-3 border border-dotted border-gray-400 p-3 my-4">
                <input type="text" placeholder="Write a tittle"
                    className="border border-gray-300 p-2 text-black text-xl"
                    value={titleI}
                    onChange={e => setTileI(e.target.value)}
                />

                <textarea name="" id="" placeholder="Write a body"
                    className="border border-gray-300 p-2 text-black text-xl h-24"
                    value={bodyI}
                    onChange={e => setBodI(e.target.value)}></textarea>

                <button className="p-3 text-white bg-blue-500 rounded-md" onClick={hanB}>Add</button>
            </div>
        </header>
    )
}