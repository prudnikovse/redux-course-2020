import {combineReducers} from 'redux'

const initialState = { counter: 0}

function counterReducer(state = initialState, action) {
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
        default:
            return state
    }
}

const initialThemeState = { value: 'light'}

function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                value: action.payload
            }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})