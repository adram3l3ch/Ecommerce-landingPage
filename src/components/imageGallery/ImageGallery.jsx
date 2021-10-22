import shoe1thumb from "../../images/image-product-1-thumbnail.jpg";
import shoe2thumb from "../../images/image-product-2-thumbnail.jpg";
import shoe3thumb from "../../images/image-product-3-thumbnail.jpg";
import shoe4thumb from "../../images/image-product-4-thumbnail.jpg";
import shoe1 from "../../images/image-product-1.jpg";
import shoe2 from "../../images/image-product-2.jpg";
import shoe3 from "../../images/image-product-3.jpg";
import shoe4 from "../../images/image-product-4.jpg";

import "./imageGallery.css";

const ImageGallery = () => {
	return (
		<div className="gallery">
			<img src={shoe1} alt="" className="main" />
			<div className="gallery__thumbs">
				<img src={shoe1thumb} alt="" className="thumb" />
				<img src={shoe2thumb} alt="" className="thumb" />
				<img src={shoe3thumb} alt="" className="thumb" />
				<img src={shoe4thumb} alt="" className="thumb" />
			</div>
		</div>
	);
};

export default ImageGallery;
