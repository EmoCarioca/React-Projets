import { Student } from './Student';
import { students } from './students';

type Props = {
    students: Student[];
}

export const StudentT = ({ students }: Props) => {
    return (
        <table className='w-screen border border-gray-600 rounded-md overflow-hidden'>
            <thead>
                <tr className='text-left border-b border-gray-600 bg-gray-800'>
                    <th className='p-3'>Name</th>
                    <th className='p-3'>Status</th>
                    <th className='p-3'>Grade1</th>
                    <th className='p-3'>Grade2</th>
                    <th className='p-3'>Final grade</th>

                </tr>
            </thead>
            <tbody>
                {students.map(item => (
                    <tr key={item.id} className='text-gray-800 bg-gray-400 border-b border-gray-600'>
                        <td className='p-3 flex items-center'>
                            <div className='flex items-center gap-2 mx-2 '>
                                <img src={item.avatar} alt={item.name} className='w-10 h-10 rounded-full mr-3' />
                                <div>
                                    <p className='font-bold'>{item.name}</p>
                                    <p>{item.email}</p>
                                </div>
                            </div>
                        </td>
                        <td className='p-3'>
                            {item.active && <div className=' text-xs px-2 py-1 inline-block rounded-md border-green-800 bg-green-600 text-white'>active</div>}
                            {!item.active && <div className='text-xs px-2 py-1 inline-block rounded-md border-red-800 bg-red-600 text-white'>inactive</div>}
                        </td>
                        <td className='p-3'>{item.grade1.toFixed(1)}</td>
                        <td className='p-3'>{item.grade2.toFixed(1)}</td>
                        <td className='p-3 font-bold    '>{item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1) : '--'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}