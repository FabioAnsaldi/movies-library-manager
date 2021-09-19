import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Navigator from	'../navigator'

class Header extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
        
		return (
			<header className="padding-2 bgColor-primary">
				<Navigator classes="header-navigator" />
			</header>
		)
	}

}

Header.propTypes = {
	navigatorOpen: PropTypes.bool,
	routes: PropTypes.array.isRequired
}

const mapStateToProps = state => {
	return {
		navigatorOpen: state.header.navigatorOpen,
		routes: state.layout.routes
	}
}

export default connect(mapStateToProps)(Header)