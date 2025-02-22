import { createContext, ReactNode, useState } from "react"

type CLoggU = {
    name: string
    setN: (n: string) => void
}

export const LgdU = createContext<CLoggU | null>(null)


export const LoggUProvider = ({ children }: { children: ReactNode }) => {
    const [name, setN] = useState('Emo')
    return (
        <LgdU.Provider value={{ name, setN }}>{children}</LgdU.Provider>
    )
}