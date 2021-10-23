import shoe1thumb from "../../images/image-product-1-thumbnail.jpg";
import shoe2thumb from "../../images/image-product-2-thumbnail.jpg";
import shoe3thumb from "../../images/image-product-3-thumbnail.jpg";
import shoe4thumb from "../../images/image-product-4-thumbnail.jpg";
import shoe1 from "../../images/image-product-1.jpg";
import shoe2 from "../../images/image-product-2.jpg";
import shoe3 from "../../images/image-product-3.jpg";
import shoe4 from "../../images/image-product-4.jpg";

import "./imageGallery.css";
import { useGlobalContext } from "../../context";

const ImageGallery = () => {
	const { activeImage, setActiveImage } = useGlobalContext();
	return (
		<div className="gallery">
			<img src={activeImage} alt="" className="main" />
			<div className="gallery__thumbs">
				<div className="thumb">
					<img src={shoe1thumb} alt="" onClick={() => setActiveImage(shoe1)} />
				</div>
				<div className="thumb">
					<img src={shoe2thumb} alt="" onClick={() => setActiveImage(shoe2)} />
				</div>
				<div className="thumb">
					<img src={shoe3thumb} alt="" onClick={() => setActiveImage(shoe3)} />
				</div>
				<div className="thumb">
					<img src={shoe4thumb} alt="" onClick={() => setActiveImage(shoe4)} />
				</div>
			</div>
		</div>
	);
};

export default ImageGallery;
