import React from 'react'

class Header extends React.Component {

	render() {
        
		return (
			<header>
				<nav>
					<ul className="nav-container">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">Home</a>
						</li>
					</ul>
				</nav>
			</header>
		)
	}

}

export default Header