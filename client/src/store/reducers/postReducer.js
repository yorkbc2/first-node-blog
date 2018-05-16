const initial = {
	fetching: false,
	fetched: false,
	posts: [],
	error: null
};

export default function postReducer (state=initial, action) {
	switch (action.type) {
		case "POSTS_FETCH_START": {
			return {...state, fetching: true};
		}
		case "POSTS_FETCH_END": {
			return {...state, fetching: false, fetched: true, posts: action.payload};
		}
		case "POSTS_FETCH_ERROR": {
			return {...state, fetching: false, error: action.payload};
		}
		default: {
			return state;
		}
	}
}