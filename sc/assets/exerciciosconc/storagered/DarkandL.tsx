import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export const DarkandL = ({ children }: Props) => {

    return (
        <div className={`w-full h-screen bg-white text-black dark:bg-black dark:text-white `}>
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
}