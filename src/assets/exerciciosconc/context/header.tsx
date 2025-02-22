import { Onlineusers } from '@/exerciciosconc/context/Onlineusers';
import { useContext } from 'react';
import { CC } from './Ccontext';


export const Header = () => {
    const countCtx = useContext(CC)
    return (
        <header>
            <h1 className='text-3xl'>Page title ({countCtx?.onC})</h1>
            <Onlineusers />
        </header>
    )
}