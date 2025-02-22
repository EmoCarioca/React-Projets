type Props = {
    image: string
    closeM: () => void
}

export const Modal = ({ image, closeM }: Props) => {
    return (
        <>
            <div onClick={closeM} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
                <img src={`/assets/${image}`} alt="" className="max-w-screen max-h-screen" />
            </div>
            <div onClick={closeM} className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-5xl">x</div>
        </>
    )
}