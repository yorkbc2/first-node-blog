import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function LoaderHOC () {
	return function (WrappedComponent) {
		class LoaderHOCComponent extends Component {
			render() {
				return this.props.fetching === true? "Loading...": (
						this.props.fetched === true? (<WrappedComponent posts={this.props.posts} />):
							null)
			}
		}
		LoaderHOCComponent.propTypes = {
			fetching: PropTypes.bool,
			fetched: PropTypes.bool,
			posts: PropTypes.oneOfType([
				PropTypes.object,
				PropTypes.array
			])
		}
		LoaderHOCComponent.displayName = WrappedComponent.displayName || "LoaderHOC(Child)";
		return LoaderHOCComponent;
	}
}