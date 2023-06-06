import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post/Post";

import "./PostsItems.scss";


const PostsItems = () => {
	const posts = useSelector(state => state.posts);

	return (
		<ul className="posts-list">
			{
				posts.map(post => {
					const { id, ...propsPost } = post;
					return (
						<Post key={id} post={propsPost} />
					)
				})
			}
		</ul>
	)
}


export default PostsItems;