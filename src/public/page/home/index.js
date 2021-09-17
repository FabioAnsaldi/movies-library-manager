import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Home extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
        
		return (
			<>
				<h1>Dashboard</h1>
				<p>Content ...</p>
				<p>
					<button className="btn-2 btn-primary">Accetta</button>
					<a className="btn-2 btn-info" href="/">Accetta</a>
					<button className="btn-2 btn-secondary">Cancella</button>
				</p>
				<p>
					<button className="btn-3 btn-warning">Accetta</button>
					<button className="btn-3 btn-black">Cancella</button>
				</p>
			</>
		)
	}

}

Home.propTypes = {
	default_value: PropTypes.bool
}

const mapStateToProps = state => {
	return {
		default_value: state.home.default_value
	}
}

export default connect(mapStateToProps)(Home)