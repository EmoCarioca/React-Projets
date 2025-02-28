import { Question } from "@/exerciciosconc/quiz/ig"
import { useState } from "react"
type Props = {
    question: Question
    count: number
    onAnswer: (answer: number) => void
}
export const QiT = ({ question, count, onAnswer }: Props) => {
    const [selecA, selectedA] = useState<number | null>(null)
    const cheQ = (key: number) => {
        if (selecA === null) {
            selectedA(key)
            setTimeout(() => {
                onAnswer(key)
                selectedA(null)
            }, 1000);
        }
    }


    return (

        <div>
            <div>{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        className={`border px-3 py-2 rounded-md text-lg mb-4  bg-blue-100 border-blue-300
                            ${selecA !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                            ${selecA !== null && selecA === question.answer && selecA === key && 'bg-green-300'}
                            ${selecA !== null && selecA !== question.answer && selecA === key && 'bg-red-300'}
                    

                            `}
                        key={key}
                        onClick={() => cheQ(key)}>
                        {item}
                    </div>

                ))}
            </div>
        </div >
    )

}