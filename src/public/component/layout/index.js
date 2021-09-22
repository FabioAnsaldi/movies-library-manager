import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import Header from '../header'
import Main from '../main'
import Footer from '../footer'
import Home from '../../page/home'
import About from '../../page/about'
import { setEnvironment } from './reducer'

class Layout extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		fetch('/3/environment', {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function(response) {
			return response.json();
		  }).then(response => {
			this.props.dispatch(setEnvironment(response))
		})
    }

	render() {
        
		return (
			<>
				<Header />
				<Main>
					<Switch>
						{/* <Route path="/settings" component={Settings} exact /> */}
						<Route path="/about" component={About} />
						<Route path="/" component={Home} />
					</Switch>
				</Main>
				<Footer />
			</>
		)
	}

}

Layout.propTypes = {
	routes: PropTypes.array.isRequired,
	page: PropTypes.object.isRequired,
	env: PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return {
		routes: state.layout.routes,
		page: state.layout.page,
		env: state.layout.env
	}
}

export default connect(mapStateToProps)(Layout)