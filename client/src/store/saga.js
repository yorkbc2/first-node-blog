import {
	call, put, takeEvery
} from 'redux-saga/effects';
import {
	fetchInfo as getInfo,
	fetchPosts as getPosts,
	fetchPost as getPost
} from './../api/functions';

function* fetchPosts (action) {
	try {
		const response = yield call(getPosts);
		yield put({type: 'POSTS_FETCH_END', payload: response.data});
	} catch (e) {
		yield put({type: 'POSTS_FETCH_ERROR', payload: e});
	}
}

function* fetchPost (action) {
	try {
		const response = yield call(getPost, action.payload);
		yield put({type: 'SINGLE_POST_FETCH_END', payload: response.data});
	} catch (e) {
		yield put({type: 'SINGLE_POST_FETCH_ERROR', payload: e})
	}
}

function* fetchInfo (action) {
	try {
		const response = yield call(getInfo);
		yield put({type: 'INFO_FETCH_END', payload: response.data});
	} catch (e) {
		yield put({type: 'INFO_FETCH_ERROR', payload: e})
	}
}

export default function* rootSaga () {
	yield takeEvery('INFO_FETCH_START', fetchInfo);
	yield takeEvery('POSTS_FETCH_START', fetchPosts);
	yield takeEvery('SINGLE_POST_FETCH_START', fetchPost);
}