import React from "react";
import "./ButtonColor.scss";

const ButtonColor = ({ label, className, onAction }) => {
	return (
		<button
			className={className}
			onClick={() => onAction()}>
			{label}
		</button >
	);
}

export default ButtonColor;