import { LgdU } from '@/exerciciosconc/lguser/loggedU'
import { useContext } from 'react'

export const Header = () => {
    const Logc = useContext(LgdU)
    const logout = () => {
        Logc?.setN('')
    }

    return (

        <header>
            <h1 className='text-3xl'>Page title</h1>
            {Logc?.name &&
                <>
                    <p>Usuario logado:{Logc?.name}</p>
                    <button onClick={logout}>Logout </button>
                </>
            }

            {(!Logc || Logc?.name === '') &&
                <p>User is offline</p>

            }
        </header>
    )
}