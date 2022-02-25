import React from "react";
import Authen from "../authen/Authen";
import Nav from "../partials/Nav";
import Search from "../search/Search";
const Header = () => {
	return (
		<header className="flex justify-between py-4 px-2 pl-4">
			<Nav />
			<div className="flex justify-center items-center gap-3 pr-4">
				<Search />
				<Authen />
			</div>
		</header>
	);
};

export default Header;
