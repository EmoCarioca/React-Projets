import { createContext, ReactNode, useState } from "react";

type CouncTex = { onC: number, setOnc: (n: number) => void }

export const CC = createContext<CouncTex | null>(null);

type Props = { children: ReactNode }

export const CountProvider = ({ children }: Props) => {
    const [onC, setOnc] = useState(42)

    return (
        <CC.Provider value={{ onC, setOnc }}>
            {children}
        </CC.Provider>
    )
}