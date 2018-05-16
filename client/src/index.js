import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import AppRouter from './components/AppRouter.js';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
	componentDidMount() {
		store.dispatch({type: 'INFO_FETCH_START'});
	}
	render() {
		return (
			<Provider store={store}>
				<div className="app">
					<AppRouter />	
				</div>
			</Provider>
		)
	}
}

render(<App />, document.querySelector('#app'));