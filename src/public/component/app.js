import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from './header'
import Main from './main'
import Footer from './footer'
import Home from '../page/home'
import routes from '../../routes'

class App extends React.Component {

	render() {

		return (
			<HashRouter basename="/">
				<Header routes={routes} />
				<Main>
					<Switch>
						{/* <Route path="/settings" component={Settings} exact /> */}
						<Route path="/" component={Home} />
					</Switch>
				</Main>
				<Footer />
			</HashRouter>
		)
	}

}

export default App