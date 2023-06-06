import React, { useState } from "react";

import "./Register.scss";


import CustomInput from "../../../components/CustomInput";
import ButtonColor from "../../../components/ButtonColor";
import AutHeader from "../components/AutHeader";
import AutFooter from "../components/AutFooter";
import GetService from "../../../service";

const Register = () => {
	const getService = new GetService;

	const [userEmail, setUserEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');

	const onSubmitForma = (e) => {
		e.preventDefault();
		const data = { email: userEmail, name: userName, password: userPassword };
		getService.postUserForm(userEmail, userName, userPassword);
		setUserEmail('');
		setUserName('');
		setUserPassword('');
	};

	const updateState = (e, setState) => {
		setState(e.target.value);
	};

	return (
		<div className="form-register modal">
			<div className="form-register__content modal__content">
				<div className="form-register__dialog modal__dialog">
					<AutHeader title={'Регистрация'} desc={'Register and help us help you'} />
					<form onSubmit={(e) => onSubmitForma(e)}>
						<CustomInput placeholder={'email'} type={'email'} onAction={updateState} setState={setUserEmail} value={userEmail} />
						<CustomInput placeholder={'Username'} type={'text'} onAction={updateState} setState={setUserName} value={userName} />
						<CustomInput placeholder={'Password'} type={'password'} onAction={updateState} setState={setUserPassword} value={userPassword} />
						<p>with registering your accepting our <a href="">terms</a> and <a href="">privacy policy</a></p>
						<ButtonColor label={'Регистрация'} className={'form-register__btn modal__btn btn-color'} onAction={() => { }} />
					</form>
					<AutFooter text={'Already have an account?'} linkText={'Login'} link={'/login'} />
				</div>
			</div>
		</div>
	)
};

export default Register;