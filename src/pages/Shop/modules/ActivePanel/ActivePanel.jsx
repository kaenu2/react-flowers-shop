import React, { useState } from "react";
import Cheep from "../../components/Cheep";
import Search from "../../components/Search/Search";
import Filtering from "../../components/Filtering/Filtering";

import "./ActivePanel.scss";

const ActivePanel = () => {
	const [openCheep, setOpenCheep] = useState(false);

	return (
		<div className="active-panel">
			<Filtering />
			<Search />
			<Cheep setOpenCheep={setOpenCheep} openCheep={openCheep} />
		</div>
	)
}

export default ActivePanel;
