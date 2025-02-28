type Props = {
    rateI: number;
}

export const Em = ({ rateI }: Props) => {
    rateI = Math.min(Math.max(rateI, 0), 5);

    const emojis = ['', '🫥', '😐', '🫠', '😊', '😁']
    let stars = `${emojis[rateI]}`.repeat(rateI) + " " + '😶'.repeat(5 - rateI)


    return (
        <div className="flex items-center text-6xl ">
            <div className="bg-gray-700">{rateI.toFixed(1)}</div>
            <div className="ml-3">{stars}</div>
        </div>
    )
}