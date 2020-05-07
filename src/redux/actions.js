
export function add() {
    return {
        type: 'ADD'
    }
}

export function sub() {
    return {
        type: 'SUB'
    }
}

export function asyncAdd() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(add())
        }, 2000)
    }
}

export function changeTheme(theme) {
    return {
        type: 'CHANGE_THEME',
        payload: theme
    }
}