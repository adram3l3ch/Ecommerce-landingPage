import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
	const [cartValue, setCartValue] = useState(1);
	const [cart, setCart] = useState({ amount: 0, number: 0, visible: false });
	const [activeImage, setActiveImage] = useState(0);
	const [imageIndex, setImageIndex] = useState(0);
	const [isMainGalleryVisible, setIsMainGalleryVisible] = useState(false);
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	return (
		<AppContext.Provider
			value={{
				cartValue,
				setCartValue,
				cart,
				setCart,
				activeImage,
				setActiveImage,
				imageIndex,
				setImageIndex,
				isMainGalleryVisible,
				setIsMainGalleryVisible,
				isSidebarVisible,
				setIsSidebarVisible,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { ContextProvider, useGlobalContext };
