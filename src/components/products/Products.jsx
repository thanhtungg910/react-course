import React from "react";

const Products = (props) => {
	const { img, title, price, onClick, idItem } = props;
	return (
		<div className="flex flex-col items-center gap-3 border-2">
			<img src={img} alt="" />
			<h2>{title}</h2>
			<h3>{price}</h3>
			<button onClick={() => onClick(idItem)}>Mua</button>
		</div>
	);
};

export default Products;
