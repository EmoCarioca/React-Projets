import { useEffect, useRef } from "react"

type Props = {
    src: string
    isP: boolean
}

export const VideoPage = ({ src, isP }: Props) => {
    const videoT = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoT.current) {
            if (isP) {
                videoT.current.play()
            } else {
                videoT.current.pause()
            }
        }
    }, [isP])


    return (
        <video ref={videoT} src={src} loop playsInline />
    )
}