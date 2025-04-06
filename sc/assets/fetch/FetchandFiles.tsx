"use client"

import { useRef, useState } from "react"



export const pag = () => {
    const [legendI, setLeng] = useState('')
    const fileInpf = useRef<HTMLInputElement>(null)

    const HDNS = async () => {
        if (fileInpf.current?.files && fileInpf.current.files.length > 0) {
            const fileItem = fileInpf.current.files[0];
            const allowed = ['img/jpg', 'img/png', 'img/jpeg']

            if (allowed.includes(fileItem.type)) {
                const data = new FormData();
                data.append('image', fileItem)
                data.append('legend', legendI)

                const res = await fetch('localhost:3000', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'multipart/form-data'
                    },
                    body: data
                })
            } else {
                alert('Incompatible file')
            }

        } else {
            alert('select a file')
        }
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl mt-4">Upload image</h1>
            <div className="flex flex-col max-w-md gap-3 border border-dotted border-white p-3 mt-4 ">
                <input type="file" ref={fileInpf} />
                <input type="text" className="p-3 text-black rounded-md" value={legendI}
                    onChange={e => setLeng(e.target.value)} />
                <button onClick={HDNS}>Send!</button>
            </div>
        </div>
    )
}

export default pag