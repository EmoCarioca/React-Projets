import { Item } from "@/exerciciosconc/reducers/items";

type Addaction = {
    type: 'add'
    payload: { text: string }
}

type EditT = {
    type: 'edit'
    payload: {
        id: number
        newT: string
    }
}

type Toggle = {
    type: 'toggle'
    payload: { id: number }
}

type Remove = {
    type: 'remove'
    payload: { id: number }
}


type ListActions = Addaction | EditT | Toggle | Remove

export const listR = (list: Item[], action: ListActions) => {
    switch (action.type) {
        case 'add':
            return [...list, {
                id: list.length,
                text: action.payload.text,
                done: false
             }]
        case 'edit':
            return list.map((t) => {
                if (t.id === action.payload.id) {
                    t.text = action.payload.newT
                }
                return t
            })
        case 'toggle':
            
            return  list.map(t => {
                if (t.id === action.payload.id){
                    return {...t, done: !t.done}
                }
                return t;

            })
        case 'remove':
            return list.filter((t) => t.id !== action.payload.id)
        default:
    }


    return list
}