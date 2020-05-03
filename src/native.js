import './styles.css'
import {createStore} from './createStore'
import {rootReducer} from './redux/rootReducer'

const counterHtml = document.getElementById('counter')
const addBtn= document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, { counter: 0})

addBtn.addEventListener('click', () => {
    console.log('fdsfds')
    store.dispatch({type: 'ADD'})
})

subBtn.addEventListener('click', () => {
    store.dispatch({type: 'SUB'})
})

asyncBtn.addEventListener('click', () => {
    store.dispatch({type: 'ADD_ASYNC'})
})

themeBtn.addEventListener('click', () => {
    //document.body.classList.toggle('dark')
})

function render(counter){
    counterHtml.textContent = counter
}

store.subscribe(() => {
    const state = store.getStore()
    render(state.counter)
})

store.dispatch({type: 'INIT_APP'})