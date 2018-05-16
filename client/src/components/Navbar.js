import React from 'react';
import { connect } from 'react-redux';
import {
	NavLink
} from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return (
			<nav className="nav" id="nav">
				{this.props.pages.fetched === true? 
				(<ul className="nav__menu">
					{this.props.pages.data.map(page => {
						return (
							<li className="nav__item" key={page.id}>
								<NavLink exact activeClassName="nav__current" to={page.url}>{page.title}</NavLink>
							</li>
						)
					})}
				</ul>)
				:null}
			</nav>
		);
	}
}

export default connect(
	state => {
		return {
			pages: state.info
		}
	}
)(Navbar);