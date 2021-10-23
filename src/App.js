import Navbar from "./components/navbar/Navbar";
import "./app.css";
import Product from "./components/product/Product";
import MainImageGallery from "./components/mainImageGallery/MainImageGallery";

function App() {
	return (
		<div className="app">
			<MainImageGallery />
			<div className="container">
				<Navbar />
				<Product />
			</div>
		</div>
	);
}

export default App;
