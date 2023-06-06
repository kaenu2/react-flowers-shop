import React, { useState } from 'react';
import ButtonColor from '../../../../components/ButtonColor';
import './Promo.scss';

const Promo = ({ onOpenModalState }) => {
	// const [open, setOpen] = useState(false);

	return (
		<section className='promo'>
			<div className='promo__left'>
				<h1>Цветы, 🌻 то, что нужно миру</h1>
				{/* <p>Просматривайте среди цветов цветы</p> */}
				<ButtonColor
					label={'Подписаться на новости'}
					className={'promo__btn btn-color'}
					onAction={() => onOpenModalState()}
				/>
			</div>
			<div className='promo__imgs'>
				<a href='https://ibb.co/JHBw93c'>
					<img
						src='https://i.ibb.co/JHBw93c/img06.jpg'
						alt='img06'
					/>
				</a>
				<a href='https://ibb.co/QXb58Vt'>
					<img
						src='https://i.ibb.co/QXb58Vt/img01.jpg'
						alt='img01'
					/>
				</a>
				<a href='https://ibb.co/0fr7B8G'>
					<img
						src='https://i.ibb.co/0fr7B8G/img02.jpg'
						alt='img02'
					/>
				</a>
				<a href='https://ibb.co/Q9b5tK5'>
					<img
						src='https://i.ibb.co/Q9b5tK5/img03.jpg'
						alt='img03'
					/>
				</a>
				<a href='https://ibb.co/wJswPx7'>
					<img
						src='https://i.ibb.co/wJswPx7/img04.jpg'
						alt='img04'
					/>
				</a>
				<a href='https://ibb.co/9807pfk'>
					<img
						src='https://i.ibb.co/9807pfk/img05.jpg'
						alt='img05'
					/>
				</a>
			</div>
		</section>
	);
};

export default Promo;
