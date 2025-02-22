import { Photo } from '@/exerciciosconc/gallery/pls'

type Props = {
    photo: Photo
    onClick: () => void

}

export const Photoi = ({ photo, onClick }: Props) => {
    return (
        <div onClick={onClick} className='cursor-pointer hover:opacity-80'>
            <div><img src={`/assets/${photo.url}`} alt="" className='w-full' /></div>

        </div>
    )

} 