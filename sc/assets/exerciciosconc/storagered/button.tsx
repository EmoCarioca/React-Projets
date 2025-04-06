
type Props = {
    label: string
    onClick: () => void
}
export const Button = ({ label, onClick }: Props) => {


    return (
        <button className='font-bold py-2 px-4 rounded-md 
        bg-black text-white dark:bg-white dark:text-black'
            onClick={onClick}
        >
            {label}
        </button>
    )
}