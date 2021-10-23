import React from "react";
import "./mainImageGallery.css";

import shoe1thumb from "../../images/image-product-1-thumbnail.jpg";
import shoe2thumb from "../../images/image-product-2-thumbnail.jpg";
import shoe3thumb from "../../images/image-product-3-thumbnail.jpg";
import shoe4thumb from "../../images/image-product-4-thumbnail.jpg";
import shoe1 from "../../images/image-product-1.jpg";
import shoe2 from "../../images/image-product-2.jpg";
import shoe3 from "../../images/image-product-3.jpg";
import shoe4 from "../../images/image-product-4.jpg";
import leftArrow from "../../images/icon-previous.svg";
import rightArrow from "../../images/icon-next.svg";
import { useGlobalContext } from "../../context";

const IMAGES = [shoe1, shoe2, shoe3, shoe4];

const MainImageGallery = () => {
	const { imageIndex, setImageIndex } = useGlobalContext();

	const updateImageIndex = value => {
		if (imageIndex + value < 0) return setImageIndex(3);
		if (imageIndex + value > 3) return setImageIndex(0);
		return setImageIndex(imageIndex + value);
	};

	return (
		<div className="mainImageGallery">
			<div className="mainGallery">
				<div className="main">
					<img
						src={leftArrow}
						alt=""
						className="arrow left"
						onClick={() => updateImageIndex(-1)}
					/>
					<img src={IMAGES[imageIndex]} alt="" className="main" />
					<img
						src={rightArrow}
						alt=""
						className="arrow right"
						onClick={() => updateImageIndex(1)}
					/>
				</div>
				<div className="mainGallery__thumbs">
					<div className="thumb">
						<img src={shoe1thumb} alt="" onClick={() => setImageIndex(0)} />
					</div>
					<div className="thumb">
						<img src={shoe2thumb} alt="" onClick={() => setImageIndex(1)} />
					</div>
					<div className="thumb">
						<img src={shoe3thumb} alt="" onClick={() => setImageIndex(2)} />
					</div>
					<div className="thumb">
						<img src={shoe4thumb} alt="" onClick={() => setImageIndex(3)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainImageGallery;
