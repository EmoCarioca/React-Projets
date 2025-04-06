import { Message } from "./message";

type AddAct = {
    type: 'add'
    payload: {
        user: string
        text: string
    }
}

type Chatact = AddAct
export const ChatReducer = (state: Message[], action: Chatact) => {
    switch (action.type) {
        case 'add':
            return [...state, {
                id: state.length,
                user: action.payload.user,
                text: action.payload.text

            }];
        default:
            return state;
    }
}