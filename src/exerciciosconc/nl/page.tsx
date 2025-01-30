"use client"

import { Tod } from "@/exerciciosconc/nl/todo"
import { useState } from "react"


const pag = () => {
  const [itemI, setI] = useState('')
  const [list, setList] = useState<Tod[]>([
    { id: 1, label: 'fiz o dever de casa?', check: false },
    { id: 2, label: 'lavei louça?', check: false }


  ])

  const toggleI = (id: number) => {
    let nL = [...list]
    for (let i in nL){
      if(nL[i].id === id)
        nL[i].check = !nL[i].check
    }
    setList(nL)
  }

  const handB = () => {
    if (itemI.trim() === '') return;
    setList([...list, { id: list.length + 1, label: itemI, check: false }])
    setI('')

  }
  const deleteI = (id: number) => {
    setList(list.filter((item => item.id !== id)))
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1>lista de tarefas</h1>
      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-600">
        <input type="text" className="rounded-md border border-black text-black p-3 mr-3 text-2xl "
          placeholder="O que deseja fazer?" value={itemI} onChange={e => setI(e.target.value)} />
        <button onClick={handB}>Adicionar</button>
      </div>

      <p className="my-4">{list.length} itens na lista</p>
      <ul className="pl-5 list-disc w-full max-w-lg">
        {list.map(item => (
          <li key={item.id}>
            <input type="checkbox" checked={item.check} className="p-3" onClick={() => toggleI(item.id)} />
            {item.label} - <button className="hover:underline" onClick={() => deleteI(item.id)}>[deletar]</button></li>
        ))}
      </ul>
    </div>


  )
}
export default pag;