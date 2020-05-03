
export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, {type: '_INIT_'})
    const subscribers = []

    return {
        dispatch(action) {
            state = rootReducer(state, action)
            subscribers.forEach(callback => callback())
        },
        subscribe(callback){
            subscribers.push(callback)
        },
        getStore(){
            return state
        }
    }
}