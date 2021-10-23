import { createContext, useContext, useState } from "react";

import shoe1thumb from "./images/image-product-1.jpg";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
	const [cartValue, setCartValue] = useState(1);
	const [cart, setCart] = useState({ amount: 0, number: 0, visible: false });
	const [activeImage, setActiveImage] = useState(shoe1thumb);
	return (
		<AppContext.Provider
			value={{ cartValue, setCartValue, cart, setCart, activeImage, setActiveImage }}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { ContextProvider, useGlobalContext };
