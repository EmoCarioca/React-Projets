"use client"

import { Cb } from "@/components/cb";


const pag = () => {

  const handleB1 = () => alert('clickou 1')
  const handleB2 = () => alert('clickou 2')
  const handleB3 = () => alert('clickou 3')


  return (
    <div className='gap-2 container w-screen h-screen justify-center items-center flex'>
      <Cb label="click h" onClick={handleB1}/>
      <Cb label="click h2" onClick={handleB2}/>
      <Cb label="click h3"onClick={handleB3} />

    </div>
  )



}


export default pag;