import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const FancyLink = React.forwardRef((props, ref) => (
    <li ref={ref} className="nav-item">
        <a className={classnames('nav-link padding-1', { active: props.active })}>{props.label}</a>
    </li>
))

class Navigator extends React.Component {

    constructor(props) {
		super(props)
		this.state = {
			classes: props.classes,
			links: props.links,
            toggleCallback: props.toggleCallback,
            navigatorOpen: false
		}
		this.navigatorToggle = this.navigatorToggle.bind(this)
	}

    navigatorToggle() {
		this.setState(prevState => ({
			navigatorOpen: !prevState.navigatorOpen
		}))
        this.props.toggleCallback(!this.state.navigatorOpen)
	}

	render() {
        
		return (
            <nav className={this.props.classes}>
                <div className="nav-brand width-6 margin-right-2">
                    <img src="/assets/logo.svg" alt="logo" />
                </div>
                <div className="nav-hamburger width-6" onClick={this.navigatorToggle}>
                        <div className={classnames('hamburger', { checked: this.state.navigatorOpen })}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                </div>
                <ul className={classnames('nav-container nav-mobile', { checked: this.state.navigatorOpen })}>
                    {this.props.links.map(link => (
                    <Link key={link.label} className="nav-item" to={{ pathname: link.path, state: { fromDashboard: true } }} component={FancyLink} label={link.label} active={link.active} />
                    ))}
                </ul>
            </nav>
		)
	}

}

Navigator.propTypes = {
	classes: PropTypes.string,
	links: PropTypes.array,
	toggleCallback: PropTypes.func,
    navigatorOpen: PropTypes.bool
}

export default Navigator