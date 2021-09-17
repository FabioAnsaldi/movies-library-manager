import routes from '../../routes'

const SET_PAGE = 'SET_PAGE'

const initialState = {
	routes: routes,
    page: routes[0]
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
        case SET_PAGE: return {
            ...state,
            page: action.value
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

export default reducer