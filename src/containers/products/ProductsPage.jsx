import React, { useState, useEffect } from "react";
import Products from "../../components/products/Products";
import { addToCart } from "../../utils/cart";

const ProductsPage = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const res = await fetch(` http://localhost:3001/products`, {
				method: "GET",
			});
			const data = await res.json();
			setProducts(() => data);
		};

		getData();
		return () => {};
	}, []);

	const handleAddToCart = async (id) => {
		const res = await fetch(` http://localhost:3001/products/${id}`, {
			method: "GET",
		});
		const { featured_image, price, title } = await res.json();

		addToCart({ featured_image, price, id, title, amount: 1 });
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
