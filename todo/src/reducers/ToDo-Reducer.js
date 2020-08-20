//initial state
export const initialState = [
    {
        todo: 'Read TK for next class',
        completed: false,
        id: 1
    },
    {
        todo: 'Attend Lecture',
        completed: false,
        id: 2
    },
    {
        todo: 'Complete Redux project',
        completed: false,
        id: 3
    }
]

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'TOGGLE_COMPLETED':
            return state.map((item) => {
                return item.id === action.payload ? {...item, completed: !item.completed}: item
            })
        case 'CLEAR_COMPLETED':
            return state.filter((item) => !item.completed)
        default:    
            return state;
        }
}
