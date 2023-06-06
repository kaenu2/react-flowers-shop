import React from "react";
import { useDispatch } from "react-redux";
import ButtonSvg from "../button";
import "./CartProduct.scss";


const CartProduct = ({ product }) => {
	const { title, src, price, id, quantity } = product;
	const dispatch = useDispatch();

	const onAddToCart = (id) => {
		dispatch({ type: 'ADD_TO_CART_PRODUCT', payload: id });
	};

	const onRemoveProductInCart = (id) => {
		dispatch({ type: 'REMOVE_TO_CART_PRODUCT', payload: id });
	};

	const onMinusCountQuantity = (id) => {
		dispatch({ type: 'MINUS_TO_CART_QUANTITY', payload: id });
	};



	const svg = {
		minus: (<svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '2px' }}>
			<path d="M10.8923 1.96667H0.907692C0.405909 1.96667 0 1.52662 0 0.983026C0 0.439427 0.405909 0 0.907692 0H10.8923C11.3941 0 11.8 0.439427 11.8 0.983026C11.8 1.52662 11.3944 1.96667 10.8923 1.96667Z" fill="#FF8F52" />
		</svg>),
		plus: (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '3px' }} >
			<path d="M11.8 5.9C11.8 6.40178 11.3935 6.80798 10.8923 6.80798H6.80769V10.8926C6.80769 11.3944 6.40122 11.8 5.9 11.8C5.39878 11.8 4.99231 11.3944 4.99231 10.8926V6.80798H0.907692C0.406476 6.80798 0 6.40178 0 5.9C0 5.39822 0.406476 4.99259 0.907692 4.99259H4.99231V0.907976C4.99231 0.406192 5.39878 0 5.9 0C6.40122 0 6.80769 0.406192 6.80769 0.907976V4.99259H10.8923C11.3944 4.99231 11.8 5.39793 11.8 5.9Z" fill="#FF8F52" />
		</svg>)
	};


	return (
		<li>
			<div className="left-cart__left">
				<img src={src} alt={title} />
				<div className="left-cart__block">
					<div className="left-cart__titls">
						<h5>{title}</h5>
						<p>Desc</p>
					</div>
					<div className="left-cart__info">
						<p>Цена за единицу {price} руб</p>
						<div className="left-cart__group">
							<ButtonSvg onAction={onMinusCountQuantity} svg={svg.minus} quantity={quantity} id={id} />
							<span>{quantity}</span>
							<ButtonSvg onAction={onAddToCart} svg={svg.plus} quantity={null} id={id} />
						</div>
					</div>
				</div>
			</div>

			<div className="left-cart__right">
				<div>
					<button onClick={() => onRemoveProductInCart(id)}>
						<svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.52679 0.656465C4.70759 0.254125 5.07924 0 5.48437 0H9.51563C9.92076 0 10.2924 0.254125 10.4732 0.656465L10.7143 1.1875H13.9286C14.5212 1.1875 15 1.71928 15 2.375C15 3.03072 14.5212 3.5625 13.9286 3.5625H1.07143C0.479799 3.5625 0 3.03072 0 2.375C0 1.71928 0.479799 1.1875 1.07143 1.1875H4.28571L4.52679 0.656465ZM1.04129 4.75H13.9286V16.625C13.9286 17.935 12.9676 19 11.7857 19H3.18415C2.03069 19 1.04129 17.935 1.04129 16.625V4.75ZM3.71987 7.71875V16.0312C3.71987 16.3578 3.99107 16.625 4.25558 16.625C4.58036 16.625 4.79129 16.3578 4.79129 16.0312V7.71875C4.79129 7.39219 4.58036 7.125 4.25558 7.125C3.99107 7.125 3.71987 7.39219 3.71987 7.71875ZM6.93415 7.71875V16.0312C6.93415 16.3578 7.20536 16.625 7.46987 16.625C7.79464 16.625 8.03571 16.3578 8.03571 16.0312V7.71875C8.03571 7.39219 7.79464 7.125 7.46987 7.125C7.20536 7.125 6.93415 7.39219 6.93415 7.71875ZM10.1786 7.71875V16.0312C10.1786 16.3578 10.4196 16.625 10.7143 16.625C11.0089 16.625 11.25 16.3578 11.25 16.0312V7.71875C11.25 7.39219 11.0089 7.125 10.7143 7.125C10.4196 7.125 10.1786 7.39219 10.1786 7.71875Z" fill="#838383" />
						</svg>
					</button>
				</div>
				<p>Итого <strong>{price * quantity} руб</strong></p>
			</div>
		</li>
	)
}


export default CartProduct;