const GET_MOVIE_LIST = 'GET_MOVIE_LIST'

const initialState = {
	movieList: {}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case GET_MOVIE_LIST: return {
		...state,
		movieList: action.value
	}
	default: return state
	}
}

export const getMovieList = value => {
	return {
		type: GET_MOVIE_LIST,
		value: value,
		info: 'Get movie list'
	}
}

export default reducer