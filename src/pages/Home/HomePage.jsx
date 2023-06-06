import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import ModalPopUp from "../../modules/PopUp/PopUpForm";


import Popular from "./modules/Popular/Popular";
import Posts from "./modules/Posts";
import Promo from "./modules/Promo";


const HomePage = () => {
	const [openModal, setOpenModal] = useState(false);

	const onOpenModalState = () => {
		setOpenModal((prev) => !prev);
		if (!openModal) {
			document.body.classList.add('_lock');
		} else {
			document.body.classList.remove('_lock');
		}
	};


	return (
		<main>
			<div className="_container">
				<Promo onOpenModalState={onOpenModalState} />
				<Popular />
				<Posts />
				<ModalPopUp state={openModal} onOpenModalState={onOpenModalState} />
			</div>
			<Footer />
		</main>
	)
};

export default HomePage;