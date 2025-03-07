"use client"
import { useState, useReducer } from 'react'
import { ReactNode } from 'react';
import React from 'react'


type Task = {
    id: number,
    text: string
}

const initialState: Task[] = [];

type Act = | { type: 'add'; text: string } | { type: 'remove'; id: number } | { type: 'edit'; id: number; newT: string };

function reducer(state: Task[], action: Act) {
    switch (action.type) {
        case 'add':
            return [...state,
            { id: Date.now(), text: action.text }
            ]
        case 'remove':
            return state.filter((task) => task.id !== action.id)

        case 'edit':
            return state.map((task) =>
                task.id === action.id ? { ...task, text: action.newT } : task
            );

        default:
            return state;
    }

}



export const Task = () => {
    const [inpt, setInpt] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)
    const [ediT, setEdiT] = useState('')
    const [red, setRend] = useState<number | null>(null)


    function addT() {
        if (inpt.trim()) {
            dispatch({ type: 'add', text: inpt })
            setInpt("")
            setEdiT("")

        }
    }

    function edit(id: number) {
        if (ediT.trim()) {
            dispatch({ type: 'edit', id, newT: ediT });
            setRend(null);
            setEdiT('');
        }
    }





    return (
        <div className='ml-3 mt-1'>
            <h1>Tarefas</h1>
            <input className='text-black' value={inpt} type="text" name="" id="" onChange={(event) => setInpt(event.target.value)} />
            <button onClick={addT}>Adicionar tarefa</button>
            <hr />
            <br />
            <ul>
                {state.map((task) => (

                    <li key={task.id}>
                        <span>{task.text}</span>
                        {red === task.id &&
                            <input className='text-black' type="text" value={ediT} onChange={(event) => setEdiT(event.target.value)}
                            />

                        }
                        <button onClick={() => dispatch({ type: 'remove', id: task.id })}>[delete]</button>
                        <button onClick={() => { setRend(task.id), setEdiT(task.text) }}>[edit]</button>




                    </li>
                ))}
            </ul>
        </div >
    )
}