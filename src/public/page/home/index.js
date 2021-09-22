import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Search from '../../component/search'
import { getMovieList } from './reducer'

class Home extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		fetch('/3/movie-list', {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function(response) {
			return response.json();
		  }).then(response => {
			this.props.dispatch(getMovieList(response))
		})
    }

	render() {

		const movieFilter = item => item.title.toLowerCase().indexOf(this.props.search.toLowerCase()) > -1

		return (
			<>
				<h1 className="padding-top-1 padding-bottom-1 margin-bottom-2 color-primary">Enlabs Movies List</h1>
				<Search />
				<div className="section group">
				{this.props.movieList.items && this.props.movieList.items.filter(movieFilter).map((movie) => (
					<div key={movie.id} className="card col span_1_of_4 span_2_of_2 bgColor-primary">
						<div className="padding-2">
							<div className="image margin-bottom-1">
								<img src={`${this.props.env.APPLICATION_SOURCE_ADDRESS}/t/p/w185_and_h278_multi_faces${movie.poster_path}`} alt={movie.title} width="185" height="278" />
							</div>
							<div className="info">
								<p className="vote"><span className="label">vote</span>{movie.vote_average}</p>
								<p className="popularity"><span className="label">popularity</span>{movie.popularity}</p>
								<p className="date"><span className="label">date</span>{movie.release_date.split('-')[0]}</p>
							</div>
							<h3 className="title margin-bottom-1">{movie.title}</h3>
							<p className="overview">{movie.overview}</p>
						</div>
					</div>
				))}
				</div>
			</>
		)
	}

}

Home.propTypes = {
	movieList: PropTypes.object.isRequired,
	env: PropTypes.object.isRequired,
	search: PropTypes.string
}

const mapStateToProps = state => {
	return {
		movieList: state.home.movieList,
		env: state.layout.env,
		search: state.search.text
	}
}

export default connect(mapStateToProps)(Home)