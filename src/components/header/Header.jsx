import React from "react";
import Nav from "../partials/Nav";
import Search from "../search/Search";
const Header = () => {
	return (
		<header className="flex justify-between py-4 px-2 bg-gray-100 shadow rounded-sm">
			<Nav />
			<Search />
		</header>
	);
};

export default Header;
