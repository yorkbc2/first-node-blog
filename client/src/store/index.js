import {
	createStore,
	combineReducers,
	applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import postReducer from './reducers/postReducer';
import singlePostReducer from './reducers/singlePostReducer';
import infoReducer from './reducers/infoReducer';
import saga from './saga';


const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
	posts: postReducer,
	singlePost: singlePostReducer,
	info: infoReducer
});
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

export default store;