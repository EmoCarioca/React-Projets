import { useState, useReducer } from 'react'

type Task = {
    id: number,
    text: string
}

const initialState: Task[] = [];

type Act = | { type: 'add'; text: string }

function reducer(state: Task[], action: Act) {
    switch (action.type) {
        case 'add':
            return [...state,
            { id: Date.now(), text: action.text }
            ]
    }
}



export const Task = () => {
    const [inpt, setInpt] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)



    function addT() {
        dispatch({ type: 'add', text: inpt })
    }

    return (
        <div className='ml-3 mt-1'>
            <h1>Tarefas</h1>
            <input className='text-black' type="text" name="" id="" onChange={(event) => setInpt(event.target.value)} />
            <button onClick={addT}>Adicionar tarefa</button>
            <hr />
            <br />
            <ul>
                {state.map((task) => (

                    <li key={task.id}>
                        <span>{task.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}