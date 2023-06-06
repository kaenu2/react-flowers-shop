import React from "react";
import "./AutFooter.scss";
import { Link } from "react-router-dom";

const AutFooter = ({ text, linkText, link }) => {
	return (
		<div className="form__footer form-footer">
			<p>{text} <Link to={link}>{linkText}</Link></p>
		</div>
	)
}

export default AutFooter;