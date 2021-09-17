import { createStore, applyMiddleware } from 'redux'
import combinedReducers from './index'
import { createLogger } from 'redux-logger'

const logger = createLogger({
	predicate: (getState, action) => {
		return process.env.NODE_ENV !== 'production'
	}
})

const store = createStore(combinedReducers, applyMiddleware(logger))

export default store
