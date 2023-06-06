import React from "react";
import "./Post.scss";

const Post = ({ post }) => {
	const { date, src, title, desc } = post;
	const dateAtribute = date.split('/').join('-');
	return (
		<li className="post">
			<div className="post__header header-post">
				<a href="#" className="header-post__user">
					<img src="img/posts/avatar.png" alt="Flower Shop" />
					<cite>Flower Shop</cite>
				</a>
				<time datatime={dateAtribute}>{date}</time>
			</div>
			<a href="#" className="post__img">
				<img src={src} alt={title} />
			</a>
			<div className="post__content">
				<a href="#"><h3>{title}</h3></a>
				<p>{desc}</p>
			</div>
			<div className="post__footer">
				<a href="#">Подробнее...</a>
			</div>
		</li>
	)
}

export default Post;