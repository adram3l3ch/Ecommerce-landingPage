import React from "react";
import "./sidebar.css";
import close from "../../images/icon-close.svg";
import { useGlobalContext } from "../../context.js";

const Sidebar = () => {
	const { isSidebarVisible, setIsSidebarVisible } = useGlobalContext();
	return (
		<div className={isSidebarVisible ? "sidebar active" : "sidebar"}>
			<img src={close} alt="" className="close" onClick={() => setIsSidebarVisible(false)} />
			<ul>
				<li>Collections</li>
				<li>Men</li>
				<li>Women</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

export default Sidebar;
