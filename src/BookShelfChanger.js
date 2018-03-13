import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {

	static propTypes = {
		shelf: PropTypes.string,
		moveToShelf: PropTypes.func.isRequired
	};

	handleChange = (event) => {
		this.props.moveToShelf(event.target.value);
	};

	render() {
		return (

			<div className="book-shelf-changer">
				<select defaultValue={this.props.shelf || 'none'} onChange={this.handleChange}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading" >Currently Reading</option>
					<option value="wantToRead" >Want to Read</option>
					<option value="read" >Read</option>
					<option value="none" >None</option>
				</select>
			</div>

		);
	}
}

export default BookShelfChanger;
