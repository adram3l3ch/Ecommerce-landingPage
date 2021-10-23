import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";
import MainImageGallery from "./components/mainImageGallery/MainImageGallery";
import { useGlobalContext } from "./context";
import Sidebar from "./components/sideBar/Sidebar";

function App() {
	const { isMainGalleryVisible } = useGlobalContext();
	return (
		<div className="app">
			<Sidebar />
			{isMainGalleryVisible && <MainImageGallery />}
			<div className="container">
				<Navbar />
				<Product />
			</div>
		</div>
	);
}

export default App;
