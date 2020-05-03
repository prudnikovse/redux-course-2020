
export function rootReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'SUB':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_ASYNC':
            return state
        default:
            return state
    }
}