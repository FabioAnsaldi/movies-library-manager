import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../combiner/store'
import Layout from '../layout'

class App extends React.Component {

	render() {

		return (
			<Provider store={store}>
				<HashRouter basename="/">
					<Layout />
				</HashRouter>
			</Provider>
		)
	}

}

export default App