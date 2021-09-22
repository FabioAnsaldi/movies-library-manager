import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import Navigator from	'../navigator'

class Header extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
        
		return (
			<header className={classnames('padding-2', { 'bgColor-primary': !this.props.navigatorOpen, 'bgColor-secondary': this.props.navigatorOpen })}>
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
		navigatorOpen: state.navigator.menuOpen,
		routes: state.layout.routes
	}
}

export default connect(mapStateToProps)(Header)