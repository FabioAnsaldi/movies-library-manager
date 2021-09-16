import React from 'react'

class Footer extends React.Component {

	render() {
        
		return (
			<footer className="padding-2 position-absolute bgColor-primary bottom-0">
				<nav>
					<ul className="nav-container">
						<li className="nav-item">
							powered by&nbsp;<a className="nav-link" href="https://www.linkedin.com/in/fabio-ansaldi-08397510a/" target="_blank" rel="noreferrer">Fabio Ansaldi</a>
						</li>
					</ul>
				</nav>
			</footer>
		)
	}

}

export default Footer