import React from "react";
import "./Title.scss";

const Title = ({ label }) => {
	return (
		<h2 className="title">{label}</h2>
	)
}

export default Title;