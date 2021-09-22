import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { toggleNavigator } from './reducer'

class Navigator extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			classes: props.classes
		}
		this.navigatorToggle = this.navigatorToggle.bind(this)
	}

	navigatorToggle() {
		this.props.dispatch(toggleNavigator(!this.props.menuOpen))
	}

	render() {
        
		return (
			<nav className={this.state.classes}>
				<div className="nav-brand width-6 margin-right-2">
					<img src="/assets/logo.svg" alt="logo" />
				</div>
				<div className="nav-hamburger width-6" onClick={this.navigatorToggle}>
					<div className={classnames('hamburger', { checked: this.props.menuOpen })}>
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</div>
				</div>
				<ul className={classnames('nav-container nav-mobile', { checked: this.props.menuOpen })}>
					{this.props.links && this.props.links.map(link => (
						<li key={link.label} className="nav-item">
							<NavLink onClick={this.navigatorToggle} className="nav-link padding-1" exact={true} to={{ pathname: link.path, state: { fromDashboard: true } }}>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		)
	}

}

Navigator.propTypes = {
	classes: PropTypes.string,
	links: PropTypes.array,
	menuOpen: PropTypes.bool,
	dispatch: PropTypes.func
}

const mapStateToProps = state => {
	return {
		links: state.layout.routes,
		menuOpen: state.navigator.menuOpen
	}
}

export default connect(mapStateToProps)(Navigator)