import React from 'react';
import { Link } from '@reach/router';

const Header = (props) => {
	return (
		<header className="header">
			<h1>Student Tracker - {props.screen}</h1>
			{props.screen === 'Students' ? (
				<Link to='/'>
					<button>Home</button>
				</Link>
			) : null}
		</header>
	);
};

export default Header;
