import React from 'react';
import {connect} from 'react-redux';

class SinglePost extends React.Component {
	componentDidMount() {
		let id = this.props.match.params.id;
		console.log(this.props.singlePost)
		if (this.props.singlePost.fetched !== true || this.props.singlePost.post.id !== id) {
			this.props.dispatch({type: "SINGLE_POST_FETCH_START", payload: parseInt(id, 10)});
		}
	}
	render() {
		return (
			<div className="single__post">
				<div className="single__post_body">
					<h2 className="single__post_title">{this.props.singlePost.title}</h2>
					<div className="single__post_content">
						{this.props.singlePost.content}
					</div>
				</div>
				<div className="single__post_info">
					<span>Views: {this.props.singlePost.views}</span>&nbsp;
					<span><i className="fa fa-thumbs-up"></i> {this.props.singlePost.likes}</span>
				</div>
			</div>
		);
	}
}

export default connect(
	state => {
		return {
			singlePost: state.singlePost.post
		}
	}
)(SinglePost);