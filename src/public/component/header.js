import React from 'react'

class Header extends React.Component {

	render() {
        
		return (
			<header className="margin-2">
				<nav>
					<ul className="nav-container">
						<li className="nav-item">
							<a className="nav-link active btn-1 btn-success" href="/">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active btn-1 btn-error" href="/">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active btn-1 btn-info" href="/">Home</a>
						</li>
					</ul>
				</nav>
			</header>
		)
	}

}

export default Header