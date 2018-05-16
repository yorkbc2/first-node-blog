const initial = {
	fetching: false,
	fetched: false,
	data: {},
	error: null
};

export default function infoReducer (state=initial, action) {
	switch (action.type) {
		case "INFO_FETCH_START": {
			return {...state, fetching: true};
		}
		case "INFO_FETCH_END": {
			return {...state, fetching: false, fetched: true, data: action.payload};
		}
		case "INFO_FETCH_ERROR": {
			return {...state, fetching: false, error: action.payload};
		}
		default: {
			return state;
		}
	}
}