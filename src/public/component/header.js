import React from 'react'
import PropTypes from 'prop-types'
import Navigator from	'./navigator'

class Header extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			navigatorOpen: false,
			routes: props.routes
		}
		this.navigatorHandleCallback = this.navigatorHandleCallback.bind(this)
	}

	navigatorHandleCallback(state) {
		this.setState(() => ({
			navigatorOpen: state
		}))
	}

	render() {
        
		return (
			<header className="padding-2 bgColor-primary">
				<Navigator classes="header-navigator" links={this.state.routes} toggleCallback={this.navigatorHandleCallback} />
			</header>
		)
	}

}

Header.propTypes = {
    navigatorOpen: PropTypes.bool,
	routes: PropTypes.array.isRequired
}

export default Header