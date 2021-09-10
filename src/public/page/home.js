import React from 'react'

class Home extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
        
		return (
			<>
				<h1>Dashboard</h1>
				<p>Content ...</p>
				<p>
					<button className="btn-2 btn-primary">Accetta</button>
					<a className="btn-2 btn-info" href="/">Accetta</a>
					<button className="btn-2 btn-secondary">Cancella</button>
				</p>
				<p>
					<button className="btn-3 btn-warning">Accetta</button>
					<button className="btn-3 btn-black">Cancella</button>
				</p>
			</>
		)
	}

}

export default Home