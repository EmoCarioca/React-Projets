import { Posts } from '@/app/data/listpt';

type AddAc = {
    type: 'add'
    payload: {
        title: string
        body: string
    }
}

type RemoveAc = {
    type: 'remove'
    payload: {
        id: number
    }
}



type PostAc = AddAc | RemoveAc
export const poT = (post: Posts[], action: PostAc) => {
    switch (action.type) {
        case 'add':
            return [...post, {
                id: post.length,
                title: action.payload.title,
                body: action.payload.body

            }]

        case 'remove':
            return post.filter(p => p.id !== action.payload.id
            )

        default:
            return post

    }
}