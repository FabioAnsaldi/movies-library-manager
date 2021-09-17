const UPDATE_LINKS = 'UPDATE_LINKS'
const TOGGLE_MENU = 'TOGGLE_MENU'

const initialState = {
    links: [],
    menuOpen: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
        case UPDATE_LINKS: return {
            ...state,
            links: action.value
        }
        case TOGGLE_MENU: return {
            ...state,
            menuOpen: action.value
        }
        default: return state
	}
}

export const updateLinks = value => {
	return {
		type: UPDATE_LINKS,
		value: value,
		info: 'Update links'
	}
}

export const toggleNavigator = value => {
	return {
		type: TOGGLE_MENU,
		value: value,
		info: 'Toggle menu hambburger'
	}
}

export default reducer