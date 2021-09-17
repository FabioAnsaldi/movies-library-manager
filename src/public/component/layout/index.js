import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import Header from '../header'
import Main from '../main'
import Footer from '../footer'
import Home from '../../page/home'

class Layout extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
        
		return (
			<>
				<Header />
				<Main>
					<Switch>
						{/* <Route path="/settings" component={Settings} exact /> */}
						<Route path="/" component={Home} />
					</Switch>
				</Main>
				<Footer />
			</>
		)
	}

}

Layout.propTypes = {
	page: PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return {
		page: state.layout.page
	}
}

export default connect(mapStateToProps)(Layout)