import React from "react";
import { useGlobalContext } from "../../context";
import "./cart.css";
import image from "../../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../images/icon-delete.svg";

const Cart = () => {
	const { cart, setCart } = useGlobalContext();
	return (
		<div className="cart">
			<h2>Cart</h2>
			<div className="cart__items">
				{cart.amount ? (
					<>
						<div className="cart__card">
							<img src={image} alt="shoe" />
							<div className="cart__details">
								<h3>Fall Limited Edition Sneakers</h3>
								<div className="cart__card__price">
									<p>$125.00 x {cart.number}</p>
									<h4>${cart.amount}.00</h4>
								</div>
							</div>

							<img
								src={deleteIcon}
								alt="delete from cart"
								className="delete"
								onClick={() => setCart({ amount: 0, number: 0, visible: true })}
							/>
						</div>
						<button>Checkout</button>
					</>
				) : (
					<p>Cart is empty</p>
				)}
			</div>
		</div>
	);
};

export default Cart;
