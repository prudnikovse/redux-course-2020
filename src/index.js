import './styles.css'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootReducer'
import {add, sub, asyncAdd, changeTheme} from  './redux/actions'

const counterHtml = document.getElementById('counter')
const addBtn= document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, applyMiddleware(thunk))

addBtn.addEventListener('click', () => {
    store.dispatch(add())
})

subBtn.addEventListener('click', () => {
    store.dispatch(sub())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncAdd())
})

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ?
        'dark' : 'light'
    store.dispatch(changeTheme(newTheme))
    //document.body.classList.toggle('dark')
})

function render(counter){
    counterHtml.textContent = counter
}

store.subscribe(() => {
    const state = store.getState()
    render(state.counter.counter)
    document.body.className = state.theme.value
})

store.dispatch({type: 'INIT_APP'})



