import React from 'react';
import {
	Route,
	Switch
} from 'react-router';
import {
	BrowserRouter
} from 'react-router-dom';

import Navbar from './Navbar.js';

import Posts from './../pages/Posts/Posts';
import SinglePost from './../pages/SinglePost/SinglePost';

const AppRouter = props => {
	return (
		<div className="app__router">
			<BrowserRouter>
				<div className="app__router_inside">
					<Navbar />
					<div className="app__container">
						<Switch>
							<Route exact path="/" component={Posts} />
							<Route path="/read/:id" component={SinglePost} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default AppRouter;