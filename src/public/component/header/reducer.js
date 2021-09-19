const TOGGLE_NAVIGATOR = 'TOGGLE_NAVIGATOR'

const initialState = {
	navigatorOpen: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case TOGGLE_NAVIGATOR: return {
		...state,
		navigatorOpen: action.value
	}
	default: return state
	}
}

export const toggleNavigator = value => {
	return {
		type: TOGGLE_NAVIGATOR,
		value: value,
		info: 'Navigator hambburger clicked'
	}
}

export default reducer