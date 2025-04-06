"use client"

import { DarkandL } from "@/components/cpnts/DarkandL"
import { ThemeProvider } from "@/reducers/DAL"
import { Button } from './../components/button';
import { ThemeS } from "@/components/button2";

export const eg = () => {
    
    return (
        <ThemeProvider>
            <DarkandL>
                <header className="py-5">
                    <h1 className="text-3xl">Title page</h1>
                </header>
                    <section>
                        <p className="my-5">Page content</p>
                        <Button label='click here' onClick={() => {ThemeS}}/>                         
                    </section>
                    <ThemeS/>
            </DarkandL>
        </ThemeProvider>
    )
}

export default eg