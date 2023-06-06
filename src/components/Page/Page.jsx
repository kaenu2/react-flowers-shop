import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";

import Header from "../../modules/Header";
import { CartPage, HomePage, ShopPage, NotFound, About } from "../../pages/index";

import GetService from "../../service";


const Page = () => {
	const getService = new GetService();
	// const products = useSelector(state => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		getService.getProducts()
			.then(data => updateProducts(data))
			.catch((err) => updateError(err));
	}, []);

	const updateError = (err) => {
		dispatch({ type: '', payload: err });
		dispatch({ type: '' });
	};

	const updateProducts = (data) => {
		dispatch({ type: 'GET_PRODUCTS_API', payload: data });
	};

	return (
		<>
			<Header />
			<Routes>
				<Route path="react-flowers-shop/" element={<HomePage />} />
				<Route path="react-flowers-shop/shop" element={<ShopPage />} />
				<Route path="react-flowers-shop/about" element={<About />} />
				<Route path="react-flowers-shop/cart" element={<CartPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default Page;