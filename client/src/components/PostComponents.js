import React from 'react';
import PropTypes from 'prop-types';
import {
	Link 
} from 'react-router-dom';

const PostTypes = PropTypes.shape({
	id: PropTypes.number,
	title: PropTypes.string,
	excerpt: PropTypes.string,
	views: PropTypes.number,
	likes: PropTypes.number
});

const PostItem = props => {
	return (
		<article className="post__item" id={"post__item-" + props.id}>
			<Link className="post__title" to={"/read/" + props.id}>
				<h3>{props.title}</h3>
			</Link>
			<p>{props.excerpt}</p>
			<div className="post__item_info">
				<span className="post__item_likes">
					<i className="fa fa-thumbs-up"></i>
					&nbsp;
					{props.likes}
				</span>
				&nbsp;
				<span className="post__item_views">
					Views: &nbsp;
					{props.views}
				</span>
			</div>
		</article>
	)
}

PostItem.propTypes = PostTypes;

const PostsList = props => {
	return (
		<div className="posts__list">
			{props.posts.map((i) => {
				return (<PostItem {...i} key={i.id} />)
			})}
		</div>
	)
}

PostsList.propTypes = {
	posts: PropTypes.arrayOf(
		PostTypes	
	)
}

export {
	PostsList,
	PostItem
}