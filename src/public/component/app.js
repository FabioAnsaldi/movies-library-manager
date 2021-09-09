import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from './header'
import Main from './main'
import Footer from './footer'
import Home from '../page/home'

class App extends React.Component {

	render() {

		return (
			<HashRouter basename="/">
				<Header />
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