const DEFAULT_ACTION = 'DEFAULT_ACTION'

const initialState = {
	navigatorOpen: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case DEFAULT_ACTION: return {
			...state,
			default_value: action.value
		}
	default: return state
	}
}

export const defaultAction = value => {
	return {
		type: DEFAULT_ACTION,
		value: value,
		info: 'Default action'
	}
}

export default reducer