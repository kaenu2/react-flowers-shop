import React from "react";
import "./CustomInput.scss";

const CustomInput = ({ placeholder, type, onAction, value, setState }) => {
	return (
		<div>
			<input
				placeholder={placeholder}
				className="form-input"
				type={type}
				value={value}
				onChange={(e) => onAction(e, setState)}
			/>
		</div>
	)
};

export default CustomInput;