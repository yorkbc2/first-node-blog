import axios from 'axios';

const apiConfig = {
	getInfo: '/get-info',
	getPosts: '/get-posts',
	getSinglePost: '/get-post'
};

export function fetchPosts () {
	return axios.get(apiConfig.getPosts);
}

export function fetchPost (id) {
	return axios.post(apiConfig.getSinglePost, {
		id: id
	});
}

export function fetchInfo () {
	return axios.get(apiConfig.getInfo);
}