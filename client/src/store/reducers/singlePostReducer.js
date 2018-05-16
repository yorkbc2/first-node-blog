const initial = {
	fetching: false,
	fetched: false,
	post: {},
	error: null
};

export default function postReducer (state=initial, action) {
	switch (action.type) {
		case "SINGLE_POST_FETCH_START": {
			return {...state, fetching: true};
		}
		case "SINGLE_POST_FETCH_END": {
			return {...state, fetching: false, fetched: true, post: action.payload};
		}
		case "SINGLE_POST_FETCH_ERROR": {
			return {...state, fetching: false, error: action.payload};
		}
		default: {
			return state;
		}
	}
}