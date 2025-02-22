import { Question } from '@/exerciciosconc/quiz/ig';
type Props = {
    questions: Question[]
    aswers: number[]
}

export const Results = ({ questions, aswers }: Props) => {
    return (
        <div>
            {questions.map((item, key) => (
                <div key={key} className='mb-3'>
                    <div>{key + 1}. {item.question}</div>
                    <div>
                        <span>{item.answer === aswers[key] ? 'acertou' : 'eroru'} - </span>
                        {item.options[item.answer]}
                    </div>
                </div>
            ))}
        </div>
    )
}