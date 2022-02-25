import React, { useState, useEffect } from "react";
import Products from "../../components/products/Products";

const ProductsPage = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const res = await fetch(`https://zgup9d.sse.codesandbox.io/products`, {
				method: "GET",
			});
			const data = await res.json();
			setProducts(() => data);
		};

		getData();
		return () => {};
	}, []);
	const handleAddToCart = (id) => {
		console.log(id);
	};
	return (
		<div className="grid grid-cols-3 gap-4">
			{products.map((item) => (
				<Products
					key={item.id}
					idItem={item.id}
					img={item.featured_image}
					title={item.title}
					price={item.price}
					onClick={handleAddToCart}
				></Products>
			))}
		</div>
	);
};

export default ProductsPage;
