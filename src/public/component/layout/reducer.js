import routes from '../../routes'

const SET_PAGE = 'SET_PAGE'
const SET_ENVIRONMENT = 'SET_ENVIRONMENT'

const initialState = {
	routes: routes,
	page: routes[0],
	env: {}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_PAGE: return {
		...state,
		page: action.value
	}
	case SET_ENVIRONMENT: return {
		...state,
		env: action.value
	}
	default: return state
	}
}

export const setPage = value => {
	return {
		type: SET_PAGE,
		value: value,
		info: 'Page was set'
	}
}

export const setEnvironment = value => {
	return {
		type: SET_ENVIRONMENT,
		value: value,
		info: 'Environment was set'
	}
}

export default reducer