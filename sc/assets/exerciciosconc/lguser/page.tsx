"use client"
import { LoggUProvider } from '@/exerciciosconc/lguser/loggedU'
import { Header } from '@/exerciciosconc/lguser/header';

export const pag = () => {

    return (
        <div>
            <LoggUProvider>
                <Header />
            </LoggUProvider>
        </div>
    )
}

export default pag