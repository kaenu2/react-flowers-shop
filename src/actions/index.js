const getProductsApi = (data) => {
	return {
		type: 'GET_PRODUCTS_API',
		payload: data,
	};
};

const loadingActive = () => {
	return {
		type: 'LOADING_ACTIVE'
	}
}
const loadingDisable = () => {
	return {
		type: 'LOADING_DISABLE'
	}
}

const searchProducts = (value) => {
	return {
		type: 'SEARCH_PRODUCT',
		payload: value,
	};
};


const addToCartProduct = (id) => {
	return {
		type: 'ADD_TO_CART_PRODUCT',
		payload: id,
	};
};

const removeToCartProduct = (id) => {
	return {
		type: 'REMOVE_TO_CART_PRODUCT',
		payload: id,
	};
};

const minusToCartQuantity = (id) => {
	return {
		type: 'MINUS_TO_CART_QUANTITY',
		payload: id,
	};
};

const filterProducts = (value) => {
	return {
		type: 'FILTER_PRODUCTS',
		payload: value,
	};
};

const getUser = (data, name) => {
	return {
		type: 'GET_USER',
		payload: [data, name],
	};
};

const sortProducts = (data) => {
	return  {
		type: 'SORT_PRODUCTS',
		payload: data,
	};
};




export {
	getProductsApi,
	searchProducts,
	addToCartProduct,
	removeToCartProduct,
	minusToCartQuantity,
	filterProducts,
	getUser,
	loadingActive,
	loadingDisable,
	sortProducts,
};