import React from 'react'

const Navbar = () => {
	return (
		<nav className="nav-wrapper red darken-3">
			<a className="brand-logo">Dummy</a>
			<ul className="right">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;