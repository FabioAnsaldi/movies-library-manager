import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { toggleNavigator as localToggleNavigator } from './reducer'
import { toggleNavigator as headerToggleNavigator } from '../header/reducer'

// eslint-disable-next-line react/display-name
const FancyLink = React.forwardRef((props, ref) => (
	<li ref={ref} className="nav-item">
		<a className={classnames('nav-link padding-1', { active: props.active })}>{props.label}</a>
	</li>
))

FancyLink.propTypes = {
	active: PropTypes.bool,
	label: PropTypes.string
}

class Navigator extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			classes: props.classes
		}
		this.navigatorToggle = this.navigatorToggle.bind(this)
	}

	navigatorToggle() {
		this.props.dispatch( localToggleNavigator( !this.props.menuOpen ) )
		this.props.dispatch( headerToggleNavigator( !this.props.menuOpen ) )
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
						<Link key={link.label} className="nav-item" to={{ pathname: link.path, state: { fromDashboard: true } }} component={FancyLink} label={link.label} active={link.path === this.props.activePage.path} />
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
	activePage: PropTypes.object
}

const mapStateToProps = state => {
	return {
		links: state.layout.routes,
		menuOpen: state.navigator.menuOpen,
		activePage: state.layout.page,
	}
}

export default connect(mapStateToProps)( Navigator )