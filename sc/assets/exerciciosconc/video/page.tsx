'use client'

import { use, useEffect, useState } from "react"
import { VideoPage } from './video';

export const pag = () => {

    const [play, setPlay] = useState(false)


    return (
        <div className="">
            <div className="border border-white p-3 mb-4">
                <p className="text-2xl text-blue-400  mb-3">{play ? 'Rodando' : 'Pausado'}</p>
                <button onClick={() => setPlay(!play)} className="bg-blue-400 rounded-md p-3 text-black ">Play/Pause</button>
            </div>
            <VideoPage
                src="http://tataleto.com/series/venorp901o/gold815/599279.mp4"
                isP={play} />
        </div>
    )
}

export default pag