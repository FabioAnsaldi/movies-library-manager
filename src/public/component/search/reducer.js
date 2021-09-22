const CHANGE_TEXT = 'CHANGE_TEXT'

const initialState = {
	text: ''
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case CHANGE_TEXT: return {
		...state,
		text: action.value
	}
	default: return state
	}
}

export const changeText = value => {
	return {
		type: CHANGE_TEXT,
		value: value,
		info: 'Search text changed'
	}
}

export default reducer