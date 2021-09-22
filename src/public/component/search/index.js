import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeText } from './reducer'

class Search extends React.Component {

	constructor(props) {
		super(props)
		this.changeTextHandle = this.changeTextHandle.bind(this)
	}

	changeTextHandle(event) {
		this.props.dispatch(changeText(event.target.value))
	}

	render() {
        
		return (
            <form action="" className="search-bar width-half margin-bottom-1">
                <input type="search" name="search" className="width-half" onChange={this.changeTextHandle} pattern=".*\S.*" />
                <button className="search-btn" type="button">
                    <span>Search</span>
                </button>
            </form>
		)
	}

}

Search.propTypes = {
	text: PropTypes.string,
	dispatch: PropTypes.func
}

const mapStateToProps = state => {
	return {
		text: state.search.text
	}
}

export default connect(mapStateToProps)(Search)