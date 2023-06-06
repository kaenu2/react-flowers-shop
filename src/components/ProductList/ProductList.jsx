import React from "react";
import "./ProductList.scss";


import ProductItem from "../ProductItem";
import Spinner from "../Spinner";


const ProductList = ({ products, loading, err, errorMessage }) => {


	if (err) {
		return <h1>{`Упс..... ${errorMessage}`}</h1>
	}

	if (loading) {
		return <Spinner />
	}


	return (
		<ul className="product-list">
			{
				products.map(product => {
					const { id } = product;
					return (
						<li key={id}>
							<ProductItem product={product} loading={loading} />
						</li>
					)
				})
			}
		</ul>
	);
};

export default ProductList;



