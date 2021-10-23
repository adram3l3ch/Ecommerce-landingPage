import React from "react";
import "./mainImageGallery.css";

import leftArrow from "../../images/icon-previous.svg";
import rightArrow from "../../images/icon-next.svg";
import close from "../../images/icon-close.svg";
import { useGlobalContext } from "../../context";

import { IMAGES, THUMBS } from "../../images";

const MainImageGallery = () => {
	const { imageIndex, setImageIndex, setIsMainGalleryVisible } = useGlobalContext();

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
					<img
						src={close}
						alt=""
						onClick={() => setIsMainGalleryVisible(false)}
						className="close"
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
						<img src={THUMBS[0]} alt="" onClick={() => setImageIndex(0)} />
					</div>
					<div className="thumb">
						<img src={THUMBS[1]} alt="" onClick={() => setImageIndex(1)} />
					</div>
					<div className="thumb">
						<img src={THUMBS[2]} alt="" onClick={() => setImageIndex(2)} />
					</div>
					<div className="thumb">
						<img src={THUMBS[3]} alt="" onClick={() => setImageIndex(3)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainImageGallery;
