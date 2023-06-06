import React from "react";
import { useSelector } from "react-redux";
import "./Popular.scss";

import ProductList from "../../../../components/ProductList";

import Title from "../components/Title";

const Popular = () => {
	const products = useSelector(state => state.products);
	const err = useSelector(state => state.error);
	const errorMessag = useSelector(state => state.errorMessag);
	const loading = useSelector(state => state.loading);

	const filterProducts = products.filter((product) => product.popular);

	return (
		<section className="popular">
			<Title label={'Популярные'} />
			<ProductList products={filterProducts} err={err} errorMessag={errorMessag} loading={loading} />
		</section>
	)
}

export default Popular;