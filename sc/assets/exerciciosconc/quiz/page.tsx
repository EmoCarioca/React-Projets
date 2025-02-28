'use client'
import { QiT } from '@/exerciciosconc/quiz/list';
import { questions } from './questions';
import { useState } from 'react';
import { Results } from '@/exerciciosconc/quiz/results';


export const pag = () => {
    const title = 'quiz'
    const [showResult, setShowResult] = useState(false)
    const [aswers, setAswers] = useState<number[]>([])
    const [cuQ, sQc] = useState(0)

    const loaN = () => {
        if (questions[cuQ + 1]) {
            sQc(cuQ + 1)
        } else {
            setShowResult(true)

        }
    }

    const restartB = () => {
        
    }

    const handleAns = (answer: number) => {
        setAswers([...aswers, answer])
        loaN()
    }


    return (


        <div className='bg-blue-500 w-full h-screen flex justify-center items-center'>
            <div className='bg-white w-full max-w-xl rounded-md text-black shadow shadow-black'>
                <div className='p-5 font-bold text-2xl shadow shadow-gray-300'>{title}</div>
                <div className='p-5'>
                    {!showResult &&
                        <QiT
                            question={questions[cuQ]}
                            count={cuQ + 1}
                            onAnswer={handleAns}

                        />
                    }
                    {showResult && <Results questions={questions} aswers={aswers} />}

                </div>
                <div className='p-5 text-center border-t border-gray-300'>
                    {!showResult && 
                    `${cuQ + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`}
                    {showResult && <button onClick={restartB} className='bg-blue-500 text-white px-5 py-2 rounded-md'>Resetar</button>
                }
                </div>
            </div>


        </div>

    )
}

export default pag