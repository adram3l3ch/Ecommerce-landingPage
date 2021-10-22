import React from "react";
import Logo from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import "./navbar.css";
import Cart from "../cart/Cart";
import { useGlobalContext } from "../../context";

const Navbar = () => {
	const { cart, setCart } = useGlobalContext();
	return (
		<div className="navbar">
			<div className="navbar__left">
				<img src={Logo} alt="logo" />
				<ul className="navbar__links">
					<li>Collections</li>
					<li className="active">Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className="navbar__right">
				<div className="navbar__cart">
					<p>{cart.number}</p>
					<img
						src={cartIcon}
						alt="cart"
						onClick={() =>
							setCart(prevstate => ({ ...prevstate, visible: !prevstate.visible }))
						}
					/>
					{cart.visible && <Cart />}
				</div>
				<img src={avatar} alt="avatar" className="avatar" />
			</div>
		</div>
	);
};

export default Navbar;
