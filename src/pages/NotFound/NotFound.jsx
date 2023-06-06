import React from "react";
import "./NotFound.scss";

const NotFound = () => {
	return (
		<main>
			<section className="page__not-found">
				<h1>404 | Страница не найдене</h1>
				<p>Запрошенный ресурс не может быть найден на сервере</p>
			</section>
		</main>
	)
}

export default NotFound;