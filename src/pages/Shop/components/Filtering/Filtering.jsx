import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Filtering.scss";

const Filtering = () => {
	const [open, setOpen] = useState(false);
	const products = useSelector(state => state.products);
	const dispatch = useDispatch();

	const onChangeValue = (value) => {
		dispatch({ type: 'FILTER_PRODUCTS', payload: value });
	};

	const updateLengthCount = (value) => {
		switch (value) {
			case 'cls':
				return products.sort((a, b) => a.id - b.id).length;
			case 'rose':
				return products.filter(product => product.categories[0] === 'rose').length;
			case 'rose-red':
				return products.filter(product => product.categories[1] === 'rose-red').length;
			case 'rose-pink':
				return products.filter(product => product.categories[1] === 'rose-pink').length;
			case 'rose-custom':
				return products.filter(product => product.categories[1] === 'rose-custom').length;
		}
	};

	return (
		<div className="filtering">
			<div className="filtering__content" onClick={() => setOpen(!open)}>
				<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.165558 1.3577C0.449883 0.757422 1.05445 0.375 1.71875 0.375H20.2812C20.9473 0.375 21.5488 0.757422 21.8324 1.3577C22.1203 1.95797 22.0301 2.66824 21.5746 3.18215L13.75 12.7887V18.25C13.75 18.7699 13.4578 19.2469 12.9895 19.4789C12.5254 19.7109 11.9668 19.6637 11.55 19.35L8.8 17.2875C8.45195 17.0297 8.25 16.6215 8.25 16.1875V12.7887L0.388523 3.18215C-0.0320119 2.66824 -0.118809 1.95797 0.165601 1.3577H0.165558Z" fill="#FF8F52" />
				</svg>
				<p>Фильтр</p>
			</div>
			<dl className={open ? 'filtering__modal _active modal-mini' : 'filtering__modal modal-mini'}>
				<dt onClick={() => onChangeValue('cls')}>Все <sup>{updateLengthCount('cls')}</sup></dt>
				<dt style={{ cursor: 'default' }}>Розы</dt>
				<dd onClick={() => onChangeValue('rose')}>Все <sup>{updateLengthCount('rose')}</sup></dd>
				<dd onClick={() => onChangeValue('rose-red')}>Красные <sup>{updateLengthCount('rose-red')}</sup></dd>
				<dd onClick={() => onChangeValue('rose-pink')}>Розовые <sup>{updateLengthCount('rose-pink')}</sup></dd>
				<dd onClick={() => onChangeValue('rose-custom')}>Цветные <sup>{updateLengthCount('rose-custom')}</sup></dd>
			</dl>
		</div>
	)
}

export default Filtering;