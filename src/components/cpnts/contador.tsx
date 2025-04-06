import { useReducer } from "react"

type State = {
    count: number
}

type Action = | {
    type: 'increment'
} | { type: 'decrement' } | { type: 'reset' }

const iniState = { count: 0 }

function Redc(state: State, action: Action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }

        case 'decrement':
            {
                if (state.count === 0) {
                    return { count: state.count }
                } 
                    return { count: state.count - 1 }
                
            }

        case 'reset': {
            return { count: 0 }
        }
    }
}

export const Eg = () => {
    const [state, dispatch] = useReducer(Redc, iniState)
    return (
        <div className="mx-auto container">
            <h1>CONTADOR</h1>
            <div className="Editor">
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <span>{state.count}</span>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
        </div >
    )
}

export default Eg