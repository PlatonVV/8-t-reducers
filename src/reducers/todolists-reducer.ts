import { TodolistType } from "../App"

export const TodolistReducer =(state: TodolistType[], action: UnionAction): TodolistType[] => {
    switch(action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el=> el.id !== action.payload.id)
        } default: return state
    }
}

type UnionAction =  ReturnType<typeof removeTodolistAC>


export const removeTodolistAC=(id: string)=> {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id
        }
    } as const
}
