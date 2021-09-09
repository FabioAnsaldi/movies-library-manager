import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			children: props.children
		}
	}

	render() {
        
		return (
			<main>
				{this.props.children}
			</main>
		)
	}
    
}

Main.propTypes = {
	children: PropTypes.node.isRequired
}

export default Main