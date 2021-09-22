import fetch from 'node-fetch'

const getMovieList = async url => {
	const response = await fetch(url, {
		method: 'GET',
		headers: {'Content-Type': 'application/json'}
	})
	const data = await response.json()

	return data
}

const Service = () => {
	return {
		getMovieList
	}
}

export default Service()