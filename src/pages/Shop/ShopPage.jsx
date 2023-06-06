import React from "react";
import "./ShopPage.scss";

import ProductList from "../../components/ProductList";
import ActivePanel from "./modules/ActivePanel";
import { useSelector } from "react-redux";


const ShopPage = () => {

	const products = useSelector(state => state.products);
	const loading = useSelector(state => state.loading);
	const term = useSelector(state => state.term);
	const filter = useSelector(state => state.filter);
	const errorMessage = useSelector(state => state.errorMessage);
	const error = useSelector(state => state.error);

	const searchProducts = (items, term) => {
		if (!term.length) {
			return items;
		}
		return items.filter(item => {
			return item.title.toLowerCase().indexOf(term) > -1;
		});
	};

	const filterProducts = (products, value) => {
		const a = JSON.stringify(products);
		const b = JSON.parse(a);
		switch (value) {
			case 'cls':
				return b.sort((a, b) => a.id - b.id);
			case 'rose':
				return b.filter(product => product.categories[0] === 'rose');
			case 'rose-red':
				return b.filter(product => product.categories[1] === 'rose-red');
			case 'rose-pink':
				return b.filter(product => product.categories[1] === 'rose-pink');
			case 'rose-custom':
				return b.filter(product => product.categories[1] === 'rose-custom');
			case 'price-min':
				return b.sort((a, b) => b.price - a.price);
			case 'price-max':
				return b.sort((a, b) => a.price - b.price);
			case 'alphabet':
				return b.sort((a, b) => {
					const aTitle = a.title.toLowerCase();
					const bTitle = b.title.toLowerCase();
					if (aTitle < bTitle) {
						return -1;
					}
					if (aTitle > bTitle) {
						return 1;
					}
					return 0;
				});
			default:
				return products;
		}
	};

	const visableProduct = filterProducts(searchProducts(products, term), filter);

	return (
		<main className="shop-page">
			<div className="shop-page__conatiner _container">
				<ActivePanel />
				<ProductList products={visableProduct} error={error} errorMessage={errorMessage} loading={loading} />
			</div>
		</main>
	)

}

export default ShopPage;