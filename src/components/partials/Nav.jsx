import React from "react";
import { Link } from "react-router-dom";
import { menu } from "../../data";

const Nav = () => {
	return (
		<nav className="flex gap-5 items-center ">
			{menu.map((item) => (
				<Link key={item.id} to={item.path}>
					{item.title}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
