import React, { useState } from "react";
import "./PopUpFomr.scss";

import ButtonColor from "../../../components/ButtonColor";


const ModalPopUp = ({ state, onOpenModalState }) => {
	const [term, setTerm] = useState('');

	const onChengeForm = (e) => {
		e.preventDefault();

		onOpenModalState();

		setTerm('');
	};

	// 

	const closeModal = (e) => {
		if (e.target.classList.contains('modal-form')) {
			onOpenModalState();
		}
	};

	const onChangeValue = (e) => {
		setTerm(e.target.value);
	};


	return (
		<div onClick={(e) => closeModal(e)} className={state ? "modal-form modal _active" : "modal-form modal"}>
			<div className="modal-form__dialog">
				<form onSubmit={(e) => onChengeForm(e)} className="modal-form__form">
					<div>
						<div className="modal-form__info">
							<span onClick={() => onOpenModalState()}></span>
							<h2>Введите данные</h2>
							<p>Подпишитесь на рассылку и мы пришлем вам новости и тонну другой полезной информации</p>
						</div>
						<div className="modal-form__group">
							<input type="email" placeholder="Ваш Email*" name="email" onChange={(e) => onChangeValue(e)} value={term} required />
						</div>
					</div>
					<ButtonColor label={'Отправить'} className={'modal-form__btn btn-color'} onAction={() => { }} />
				</form>
			</div>
		</div>
	)
};
export default ModalPopUp;