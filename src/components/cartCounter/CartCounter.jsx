import React from "react";
import { useGlobalContext } from "../../context";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import "./cartCounter.css";

const CartCounter = () => {
	const { cartValue, setCartValue } = useGlobalContext();
	const updateCartValue = value => {
		setCartValue(prevstate => {
			if (prevstate + value) return prevstate + value;
			return prevstate;
		});
	};
	return (
		<div className="cartcounter">
			<div className="decrease" onClick={() => updateCartValue(-1)}>
				<button>
					<img src={minus} alt="decrease" />
				</button>
			</div>
			<h4 className="count">{cartValue}</h4>
			<div className="increase" onClick={() => updateCartValue(1)}>
				<button>
					<img src={plus} alt="increase" />
				</button>
			</div>
		</div>
	);
};

export default CartCounter;
