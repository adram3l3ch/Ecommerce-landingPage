import Navbar from "./components/navbar/Navbar";
import "./app.css";
import Product from "./components/product/Product";

function App() {
	return (
		<div className="app">
			<div className="container">
				<Navbar />
				<Product />
			</div>
		</div>
	);
}

export default App;
