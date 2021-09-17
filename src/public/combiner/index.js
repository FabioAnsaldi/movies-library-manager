import { combineReducers } from 'redux'
import layoutReducer from '../component/layout/reducer'
import headerReducer from '../component/header/reducer'
import navigatorReducer from '../component/navigator/reducer'
import homeReducer from '../page/home/reducer'

const combinedReducers = combineReducers({
	layout: layoutReducer,
	header: headerReducer,
	navigator: navigatorReducer,
	home: homeReducer
})

export default combinedReducers