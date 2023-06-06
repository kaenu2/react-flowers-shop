import React from "react";

const ButtonSvg = ({ onAction, svg, quantity, id }) => {
	return (
		<button onClick={() => onAction(id)} disabled={quantity === 1 ? true : false}>
			{svg}
		</button>
	)
};

export default ButtonSvg;