"use client"
import { CC, CountProvider } from '@/exerciciosconc/context/Ccontext'
import { Header } from '@/exerciciosconc/context/header'
import { useState } from 'react'

export const pag = () => {


    return (
        <div>

            <CountProvider>
                <Header />
            </CountProvider>

        </div>
    )
}



export default pag