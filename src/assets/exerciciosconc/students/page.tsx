import { StudentT } from '@/exerciciosconc/students/studenttable';
import { students } from './students';
const pag = () => {

  return (
    <div className='container '>

      <h1 className='text-3xl'>Students list</h1>
      <StudentT students={students} />
    </div>
  )



}


export default pag;