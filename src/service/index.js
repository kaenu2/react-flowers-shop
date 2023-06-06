export default class GetService {
	constructor() {
		this._apiBase = 'https://640de4c81a18a5db83828add.mockapi.io/';
	}

	getResource = async (url) => {
		const response = await fetch(`${this._apiBase}${url}`);

		if (!response.ok) {
			throw new Error(`Problem connecting to the server.
			Check server link ${this._apiBase}`);
		}

		return response.json();
	}

	getProducts = async () => {
		const res = await this.getResource('/products');
		return res.map(this._transformProducts);
	};

	getUsers = async () => {
		const res = await this.getResource('/users');
		return res.map(this._transformUsers);
	}

	postUserForm = async (...arg) => {
		const userBody = {
			email: arg[0],
			name: arg[1],
			password: arg[2]
		};
		const res = await fetch(`${this._apiBase}users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(userBody)
		});
	};

	_transformProducts = (products) => {
		const { id, code, title, src, desc, price, popular, categories, quantity } = products;
		return {
			id,
			code,
			title,
			src,
			desc,
			price,
			popular,
			categories,
			quantity
		};
	};

	_transformUsers = (users) => {
		const {createdAt, id, name, avatar, email, password} = users;
		return {
			createdAt,
			id,
			name,
			avatar,
			email,
			password
		};
	};
}