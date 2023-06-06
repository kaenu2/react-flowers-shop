import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";


const Logo = ({ color, onClick }) => {
	return (
		<Link onClick={() => onClick()} to="react-flowers-shop/" className="logo">
			Flower <span style={{ color }}>Shop</span>
		</Link>
	)
};

export default Logo;