import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../components/Logo/Logo";

const Header = () => {
	const [open, setOpne] = useState(false);

	const onOpenModal = () => {
		setOpne(prev => !prev);
		if (!open) {
			document.body.classList.add('_lock');
		} else {
			document.body.classList.remove('_lock');
		}
	};


	return (
		<header className={open ? 'header _active' : 'header'}>
			<div className="header__container _container" >
				<div className="header__icon" onClick={() => onOpenModal()}><span></span></div>
				<Logo color={'#000'} onClick={() => {
					open ? onOpenModal() : () => { }
				}} />
				<nav>
					<div className={open ? "header__body _lock" : "header__body"}>
						<ul className="list-group menu-body">
							<li><NavLink onClick={() => {
								open ? onOpenModal() : () => { }
							}} className='menu-body__link' to="react-flowers-shop/" style={({ isActive }) => ({ color: isActive ? 'var(--color-orange)' : 'var(--color-black)' })}>Главная</NavLink></li>
							<li><NavLink onClick={() => {
								open ? onOpenModal() : () => { }
							}} className='menu-body__link' to="react-flowers-shop/shop" style={({ isActive }) => ({ color: isActive ? 'var(--color-orange)' : 'var(--color-black)' })} >Магазин</NavLink></li>
							<li><NavLink onClick={() => {
								open ? onOpenModal() : () => { }
							}} className='menu-body__link' to="react-flowers-shop/about" style={({ isActive }) => ({ color: isActive ? 'var(--color-orange)' : 'var(--color-black)' })}>О нас</NavLink></li>
							<li><a onClick={() => {
								open ? onOpenModal() : () => { }
							}} className='menu-body__link' href="https://www.instagram.com/flowers_frezia21/" target="_blank" style={{ color: 'var(--color-black)' }}>Блог</a></li>
						</ul>
					</div>
				</nav>
				<nav>
					<ul className="list-group">
						<li>
							<Link to="react-flowers-shop/cart" className="header__cart-icon">
								<svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.33333 0C5.97222 0 6.52222 0.463887 6.64444 1.10506L6.72778 1.8125H30.1C31.2278 1.8125 32.1278 2.95947 31.8111 4.11551L28.8111 14.9928C28.5944 15.7744 27.8944 16.3125 27.1 16.3125H9.48333L9.99444 19.0312H27.1111C27.85 19.0312 28.4444 19.6373 28.4444 20.3906C28.4444 21.1439 27.85 21.75 27.1111 21.75H8.83889C8.25 21.75 7.7 21.2855 7.57778 20.6455L4.23 2.71875H1.33333C0.597222 2.71875 0 2.10986 0 1.35938C0 0.608887 0.597222 0 1.33333 0H5.33333ZM7.11111 26.2812C7.11111 24.7803 8.30556 23.5625 9.77778 23.5625C11.25 23.5625 12.4444 24.7803 12.4444 26.2812C12.4444 27.7822 11.25 29 9.77778 29C8.30556 29 7.11111 27.7822 7.11111 26.2812ZM28.4444 26.2812C28.4444 27.7822 27.25 29 25.7778 29C24.3056 29 23.1111 27.7822 23.1111 26.2812C23.1111 24.7803 24.3056 23.5625 25.7778 23.5625C27.25 23.5625 28.4444 24.7803 28.4444 26.2812Z" fill="#FF8F52" />
								</svg>
							</Link>
						</li>
						<li>
							<Link to="react-flowers-shop/login" className="header__user-icon">
								<svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.629 14.5C16.6151 14.5 19.8456 11.2539 19.8456 7.25C19.8456 3.24607 16.6151 0 12.629 0C8.64299 0 5.41244 3.24607 5.41244 7.25C5.41244 11.2539 8.64299 14.5 12.629 14.5ZM15.4875 17.2188H9.77059C4.37562 17.2188 0 21.6141 0 27.0346C0 28.1187 0.875012 28.9983 1.95412 28.9983H23.3051C24.3842 29 25.2581 28.1221 25.2581 27.0346C25.2581 21.6141 20.883 17.2188 15.4875 17.2188Z" fill="#FF8F52" />
								</svg>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header >
	)
}

export default Header;
