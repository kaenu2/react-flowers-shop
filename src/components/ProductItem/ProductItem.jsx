import React from "react";
import { useDispatch } from "react-redux";
import ButtonCart from "../Button";
import "./ProductItem.scss";

const ProductItem = ({ product }) => {
	const { title, src, price, id } = product;
	const dispatch = useDispatch();

	const onAddToCart = (id) => {
		dispatch({ type: 'ADD_TO_CART_PRODUCT', payload: id });
	};

	return (
		<div className="product-item">
			<figure>
				<div className="scale">
					<img src={src} alt={title} />
				</div>
				<figcaption>{title}</figcaption>
			</figure>
			<div>
				<strong>{price} руб.</strong>
				<ButtonCart label={'В корзину'} color={'var(--color-orange)'} onAction={onAddToCart} id={id} />
			</div>
		</div>
	)
};

export default ProductItem;