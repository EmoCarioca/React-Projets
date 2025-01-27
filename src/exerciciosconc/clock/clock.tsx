function pag() {
  const Time = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false
  }).format()


  const h = new Date().getHours()


  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-white
    bg-gradient-to-r from-sky-500 to bg-indigo-500'>
      <div className='text-9xl'>{Time}</div>
      <div className='text-5xl font-bold'>
        {h > 0 && h < 12 && 'good morning'}
        {h > 12 && h<18 && 'good aftermoon'}
        {h>18 && h <= 23 && 'good night'}

      </div>

    </div>
  )
}

export default pag;