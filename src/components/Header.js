import React from "react";

const Header = ({ todo, done }) => {
	return (
		<header>
			<h1>To Do App</h1>
			<p>
				I currently have <span className='hightlight'>{todo}</span> tasks to do{" "}
				{" - "}
				{done}% Done
			</p>
		</header>
	);
};

export default Header;
