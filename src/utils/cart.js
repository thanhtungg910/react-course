let cart = [];
if (localStorage.getItem("cart")) {
	cart = JSON.parse(localStorage.getItem("cart"));
}
const addToCart = (data) => {
	const exitItem = cart.find((item) => item.id === data.id);
	if (!exitItem) {
		cart.push(data);
	} else {
		exitItem.amount += data.amount;
	}
	localStorage.setItem("cart", JSON.stringify(cart));
};
export { addToCart };
