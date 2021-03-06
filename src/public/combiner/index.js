import { combineReducers } from 'redux'
import layoutReducer from '../component/layout/reducer'
import headerReducer from '../component/header/reducer'
import navigatorReducer from '../component/navigator/reducer'
import searchReducer from '../component/search/reducer'
import homeReducer from '../page/home/reducer'
import aboutReducer from '../page/about/reducer'

const combinedReducers = combineReducers({
	layout: layoutReducer,
	header: headerReducer,
	navigator: navigatorReducer,
	search: searchReducer,
	home: homeReducer,
	about: aboutReducer
})

export default combinedReducers