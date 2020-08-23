import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<h1 className="header__title">ACADEMIA REBELDE</h1>
				<h2 className="header__subtitle">septiembre</h2>
			</Link>
		</header>
	);
};

export default Header;