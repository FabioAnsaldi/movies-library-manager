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
			<main className="margin-top-2 margin-bottom-2 padding-bottom-4">
				{this.props.children}
			</main>
		)
	}
    
}

Main.propTypes = {
	children: PropTypes.node.isRequired
}

export default Main