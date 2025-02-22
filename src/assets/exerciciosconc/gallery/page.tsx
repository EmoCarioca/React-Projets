"use client"
import { Photoi } from '@/exerciciosconc/gallery/img';
import { useState } from 'react';
import { Modal } from './modal';
import { pL } from './data/pl';
const pag = () => {

    const [Sm, Stm] = useState(false)
    const [iOf, sIof] = useState('')

    const oM = (id: number) => {
        const photo = pL.find(item => item.id === id)
        if (photo) {
            sIof(photo.url)
            Stm(true)
        }

    }

    const closeM = () => {
        Stm(false)
    }

    return (

        <div className="mx-2">
            <h1 className='text-center text-3xl font-bold my-10'>Lista de images</h1>
            <section className='container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {pL.map(item => (
                    <Photoi
                        key={item.id}
                        photo={item}
                        onClick={() => oM(item.id)}
                    />

                ))}
            </section>
            {Sm && <Modal image={iOf} closeM={closeM}
            />
            }
        </div>

    )
}

export default pag