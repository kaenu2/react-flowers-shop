import React from "react";
import { useSelector } from "react-redux";

import ButtonColor from "../../components/ButtonColor";

import "./CartPage.scss";
import CartProduct from "./components/CartProduct";

const CartPage = () => {
	const cart = useSelector(state => state.cart);
	const countPrice = useSelector(state => state.countPrice);
	const countQuantity = useSelector(state => state.countQuantity);

	const renderCart = cart.length ?
		<ActiveCart
			cartProducts={cart}
			countPrice={countPrice}
			countQuantity={countQuantity} /> : <EmptyCart />;
	return (
		<main className="cart">
			<div className="cart__container _container">
				{renderCart}
			</div>
		</main>
	)
}


const ActiveCart = ({ cartProducts, countPrice, countQuantity }) => {
	return (
		<div className="cart__active">
			<div className="cart__left left-cart">
				<h3>Корзина</h3>
				<ul className="left-cart__products">
					{
						cartProducts.map(product => {
							const { id } = product;
							return (
								<CartProduct key={id} product={product} />
							)
						})
					}
				</ul>
			</div>

			<div className="cart__right right-cart">
				<p>Итого за {countQuantity} товара: <strong>{countPrice} руб</strong> </p>
				<ButtonColor label={'Оплатить'} className={'right-cart__btn btn-color'} />
			</div>
		</div>
	)
};

const EmptyCart = () => {
	return (
		<div className="cart__bgc">
			<div className="cart__empty">
				<svg width="21" height="19" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.33333 0C5.97222 0 6.52222 0.463887 6.64444 1.10506L6.72778 1.8125H30.1C31.2278 1.8125 32.1278 2.95947 31.8111 4.11551L28.8111 14.9928C28.5944 15.7744 27.8944 16.3125 27.1 16.3125H9.48333L9.99444 19.0312H27.1111C27.85 19.0312 28.4444 19.6373 28.4444 20.3906C28.4444 21.1439 27.85 21.75 27.1111 21.75H8.83889C8.25 21.75 7.7 21.2855 7.57778 20.6455L4.23 2.71875H1.33333C0.597222 2.71875 0 2.10986 0 1.35938C0 0.608887 0.597222 0 1.33333 0H5.33333ZM7.11111 26.2812C7.11111 24.7803 8.30556 23.5625 9.77778 23.5625C11.25 23.5625 12.4444 24.7803 12.4444 26.2812C12.4444 27.7822 11.25 29 9.77778 29C8.30556 29 7.11111 27.7822 7.11111 26.2812ZM28.4444 26.2812C28.4444 27.7822 27.25 29 25.7778 29C24.3056 29 23.1111 27.7822 23.1111 26.2812C23.1111 24.7803 24.3056 23.5625 25.7778 23.5625C27.25 23.5625 28.4444 24.7803 28.4444 26.2812Z" fill="red" />
				</svg>
			</div>
		</div>
	)
};



export default CartPage;