import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
	const [cartValue, setCartValue] = useState(1);
	const [cart, setCart] = useState({ amount: 0, number: 0, visible: false });
	return (
		<AppContext.Provider value={{ cartValue, setCartValue, cart, setCart }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { ContextProvider, useGlobalContext };
