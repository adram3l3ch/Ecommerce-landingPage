import React from "react";
import CartCounter from "../cartCounter/CartCounter.jsx";
import ImageGallery from "../imageGallery/ImageGallery";
import { ReactComponent as CartIcon } from "../../images/icon-cart.svg";

import "./product.css";
import { useGlobalContext } from "../../context.js";

const Product = () => {
	const { cart, setCart, cartValue } = useGlobalContext();
	return (
		<div className="product">
			<div className="product__left">
				<ImageGallery />
			</div>
			<div className="product__right">
				<h3 className="product__subtitle">SNEAKER COMPANY</h3>
				<h1 className="product__title">Fall Limited Edition Sneakers</h1>
				<p className="product__details">
					These low-profile sneakers are your perfect casual wear companion. Featuring a
					durable rubber outer sole, they’ll withstand everything the weather can offer.
				</p>
				<h2 className="product__price">
					$125.00 <span>50%</span>
				</h2>
				<h3 className="product__originalprice">$250.00</h3>
				<div className="btns">
					<CartCounter />
					<div
						className="addtocart"
						onClick={() =>
							setCart({
								...cart,
								amount: cart.amount + cartValue * 125,
								number: cart.number + cartValue,
							})
						}
					>
						<CartIcon />
						<button>Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
