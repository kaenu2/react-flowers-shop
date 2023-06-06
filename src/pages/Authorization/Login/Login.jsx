import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import "./Login.scss";


import ButtonColor from "../../../components/ButtonColor";
import CustomInput from "../../../components/CustomInput";
import AutHeader from "../components/AutHeader";
import AutFooter from "../components/AutFooter";
import GetService from "../../../service";



const userOne = {
	id: 1,
	name: "Alex",
	password: 'qwerty',
};




const Login = () => {
	const getService = new GetService;
	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const user = useSelector(state => state.user);
	const loading = useSelector(state => state.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'LOADING_DISABLE' });
	}, []);

	const updateState = (e, setState) => {
		setState(e.target.value);
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		dispatch({ type: 'LOADING_ACTIVE' });
		getService.getUsers()
			.then((data) => {
				dispatch({ type: 'GET_USER', payload: [data, { name: userName, password: userPassword }] });
			})
			.catch(err => console.error(err.name));
		setUserName('');
		setUserPassword('');
	};

	if (loading) {
		return <p>loading</p>
	}

	return (
		<Route>
			<div className="form-login modal">
				<div className="form-login__content modal__content">
					<div className="form-login__dialog modal__dialog">
						<AutHeader title={'Логин'} desc={'Login and have more fun'} />
						<form onSubmit={(e) => onSubmitForm(e)}>
							<CustomInput placeholder={'Логин'} type={'text'} onAction={updateState} setState={setUserName} value={userName} />
							<CustomInput placeholder={'Пароль'} type={'password'} onAction={updateState} setState={setUserPassword} value={userPassword} />
							<div className="form-login__label">
								<label className="checkbox style-c">
									<input type="checkbox" />
									<div className="checkbox__checkmark"></div>
									<div className="checkbox__body">Запомнить меня</div>
								</label>
							</div>
							<ButtonColor label={'Авторизация'} className={'form-login__btn modal__btn btn-color'} onAction={() => { }} />
						</form>
						<AutFooter text={'dont have an account?'} linkText={'Register'} link={'/register'} />
					</div>
					<div>
						{/* <img src='img/login/bg.png' alt="bgImage" /> */}
					</div>
				</div>
			</div>
		</Route>
	);
};

export default Login;


