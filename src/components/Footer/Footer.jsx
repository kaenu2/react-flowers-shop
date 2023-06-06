import React from 'react';
import './Footer.scss';

import Logo from '../Logo/Logo';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container _container'>
				<div className='footer__list-logo'>
					<Logo color={'#fff'} />
					<div className='footer__list-text'>
						<p>
							Некоторые случайные вещи о цветочном магазине и еще немного
							информации, потому что это поле должно было быть заполнено
						</p>
					</div>
				</div>
				<dl className='footer__list'>
					<dt>Контакты</dt>
					<dd>
						<address>
							<a href=''>26985 Brighton Lane, Lake Forest, CA</a>
						</address>
					</dd>
					<dd>
						<a href='mailto:support@Flowers.com'>support@Flowers.com</a>
					</dd>
					<dd>
						<a href='tel:+1 236 5489'>+1 236 5489</a>
					</dd>
				</dl>
			</div>
		</footer>
	);
};

export default Footer;
