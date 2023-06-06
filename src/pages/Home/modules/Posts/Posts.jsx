import React from "react";
import PostsItems from "../components/PostsItems/PostsItems";
import Title from "../components/Title";
import "./Posts.scss";

const Posts = () => {

	return (
		<section className="posts">
			<Title label={'Посты'} />
			<PostsItems />
		</section>
	);
};

export default Posts;