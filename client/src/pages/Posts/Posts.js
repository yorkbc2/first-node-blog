import React, { Component } from 'react';
import { PostsList } from './../../components/PostComponents.js';
import { connect } from 'react-redux';
import LoaderHOC from './../../hoc/LoaderHOC';

const PostsListWithLoader = LoaderHOC()(PostsList);
class Posts extends Component {
	componentDidMount() {
		this.props.dispatch({type: "POSTS_FETCH_START"});
	}
	render() {
		return (
			<div className="posts__container">
				<PostsListWithLoader {...this.props.posts} />
			</div>	
		);
	}
}

export default connect(
	state => ({
		posts: state.posts
	})
)(Posts);