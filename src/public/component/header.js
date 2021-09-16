import React from 'react'

class Header extends React.Component {

	render() {
        
		return (
			<header className="padding-2 bgColor-primary">
				<nav>
					<div className="nav-brand width-6 margin-right-2">
						<img src="/assets/logo.svg" alt="logo" />
					</div>
					<div className="nav-hamburger width-6">
							<div className="hamburger">
								<span className="line"></span>
								<span className="line"></span>
								<span className="line"></span>
							</div>
					</div>
					<ul className="nav-container nav-mobile">
						<li className="nav-item">
							<a className="nav-link padding-1 active" href="/">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link padding-1" href="/">Test</a>
						</li>
						<li className="nav-item">
							<a className="nav-link padding-1" href="/">About</a>
						</li>
					</ul>
				</nav>
			</header>
		)
	}

}

export default Header