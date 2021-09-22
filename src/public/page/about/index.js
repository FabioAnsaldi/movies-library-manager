import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class About extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
        
		return (
			<>
				<h1>About</h1>
				<p>This is the About page</p>
			</>
		)
	}

}

About.propTypes = {
	default_value: PropTypes.bool
}

const mapStateToProps = state => {
	return {
		default_value: state.about.default_value
	}
}

export default connect(mapStateToProps)(About)