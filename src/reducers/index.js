const initialState = {
	products: [],
	loading: true,
	error: false,
	errorMessage: '',
	cart: [],
	term: '',
	filter: 'cls',
	countPrice: 0,
	countQuantity: 0,
	user: {},
	posts: [
		{
			id: 1,
			date: '2022/22/8',
			src: 'https://i.ibb.co/PcnGXmR/img01.jpg',
			title: 'Лучшие цветы для дома',
			desc: 'Все цветы лучше всего подходят для вашего милого дома, просто выберите тот, который вы любите больше всего😊'
		},
		{
			id: 2,
			date: '2022/22/9',
			src: 'https://i.ibb.co/LCfSWDs/img02.jpg',
			title: 'Лучшие цветы для дома',
			desc: 'Все цветы лучше всего подходят для вашего милого дома, просто выберите тот, который вы любите больше всего '
		},
		{
			id: 3,
			date: '2022/22/10',
			src: 'https://i.ibb.co/FsRfcvC/img03.jpg',
			title: 'Лучшие цветы для дома',
			desc: 'Все цветы лучше всего подходят для вашего милого дома, просто выберите тот, который вы любите больше всего'
		}
	]
};

const reducer = (state = initialState, action) => {
	const { products, cart } = state;
	const { payload } = action;

	const plusCountPrice = arr => {
		return arr
			.map(elem => elem.price * elem.quantity)
			.reduce((acc, elem) => acc + elem, 0);
	};
	const plusCountQuantity = arr => {
		return arr.reduce((acc, elem) => acc + elem.quantity, 0);
	};

	const indexCart = cart.findIndex(elem => elem.id === payload);

	switch (action.type) {
		case 'GET_PRODUCTS_API':
			return {
				...state,
				products: payload,
				loading: false
			};
		case 'LOADING_ACTIVE':
			return {
				...state,
				loading: true
			};
		case 'LOADING_DISABLE':
			return {
				...state,
				loading: false
			};
		case 'SEARCH_PRODUCT':
			return {
				...state,
				term: payload
			};
		case 'ADD_TO_CART_PRODUCT':
			const index = products.findIndex(elem => elem.id === payload);
			const filterCart = cart.filter(elem => elem.id === payload);

			if (filterCart.length) {
				let a = cart.filter(elem => elem.id === filterCart[0].id);
				const newItemCartUpdateQuantity = {
					...a[0],
					quantity: a[0].quantity + 1
				};
				const index = cart.findIndex(
					elem => elem.id === newItemCartUpdateQuantity.id
				);
				const newArrCart = [
					...cart.slice(0, index),
					newItemCartUpdateQuantity,
					...cart.slice(index + 1)
				];
				return {
					...state,
					cart: newArrCart,
					countPrice: plusCountPrice(newArrCart),
					countQuantity: plusCountQuantity(newArrCart)
				};
			} else {
				const oldItem = products[index];
				const newItem = { ...oldItem, quantity: oldItem.quantity + 1 };
				const newArrCart = [...cart, newItem];
				return {
					...state,
					cart: newArrCart,
					countPrice: plusCountPrice(newArrCart),
					countQuantity: plusCountQuantity(newArrCart)
				};
			}
		case 'REMOVE_TO_CART_PRODUCT':
			const newArrCart = [
				...cart.slice(0, indexCart),
				...cart.slice(indexCart + 1)
			];
			return {
				...state,
				cart: newArrCart,
				countPrice: plusCountPrice(newArrCart),
				countQuantity: plusCountQuantity(newArrCart)
			};
		case 'MINUS_TO_CART_QUANTITY':
			const oldItemCart = cart[indexCart];
			const newItemCart = {
				...oldItemCart,
				quantity: oldItemCart.quantity - 1
			};
			const newArrCartUpdateProduct = [
				...cart.slice(0, indexCart),
				newItemCart,
				...cart.slice(indexCart + 1)
			];
			return {
				...state,
				cart: newArrCartUpdateProduct,
				countPrice: plusCountPrice(newArrCartUpdateProduct),
				countQuantity: plusCountQuantity(newArrCartUpdateProduct)
			};
		case 'FILTER_PRODUCTS':
			return {
				...state,
				filter: payload
			};
		case 'GET_USER':
			const users = payload[0];
			const term = payload[1];
			const userProfile = users.filter(
				user => user.name === term.name && user.password === term.password
			)[0];
			localStorage.setItem('user-id', userProfile.id);
			return {
				...state,
				loading: false,
				user: userProfile
			};
		default:
			return state;
	}
};

export default reducer;
