import { IMAGES, THUMBS } from "../../images";

import "./imageGallery.css";
import { useGlobalContext } from "../../context";

const ImageGallery = () => {
	const { activeImage, setActiveImage, setIsMainGalleryVisible } = useGlobalContext();
	return (
		<div className="gallery">
			<img
				src={IMAGES[activeImage]}
				alt=""
				className="main"
				onClick={() => setIsMainGalleryVisible(true)}
			/>
			<div className="gallery__thumbs">
				<div className="thumb">
					<img src={THUMBS[0]} alt="" onClick={() => setActiveImage(0)} />
				</div>
				<div className="thumb">
					<img src={THUMBS[1]} alt="" onClick={() => setActiveImage(1)} />
				</div>
				<div className="thumb">
					<img src={THUMBS[2]} alt="" onClick={() => setActiveImage(2)} />
				</div>
				<div className="thumb">
					<img src={THUMBS[3]} alt="" onClick={() => setActiveImage(3)} />
				</div>
			</div>
		</div>
	);
};

export default ImageGallery;
