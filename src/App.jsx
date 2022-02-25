import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./components/pages/products/ProductsPage";
import HomePage from "./components/pages/home/HomePage";
function App() {
	return (
		<>
			<Header />
			<main className="mx-auto">
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/products" element={<ProductsPage />}></Route>
					<Route path="/contacts" element={<h1>contact</h1>}></Route>
					<Route path="/login" element={<h1>login</h1>}></Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
