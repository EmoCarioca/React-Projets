'use client'

import { use, useState } from 'react';


export const pag = () => {
    const [cuQ, sQc] = useState('')
 
    const [showDiv, setShowDiv] = useState(false);

    const handleClick = () => {
        setShowDiv(!showDiv);
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen'>

            <input type="text" className='text-black' value={cuQ} onChange={e => sQc(e.target.value)} />
            <button onClick={handleClick}>show value</button>
            {showDiv && (
                <div className='mt-4 p-4 border border-gray-300 rounded bg-gray-100 text-black'>
                    <p>Seu nome é: {cuQ}</p>
                </div>
            )}
        </div>
    )
}

export default pag
