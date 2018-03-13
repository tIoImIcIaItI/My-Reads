import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {

	static propTypes = {
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		authors: PropTypes.array,
		backgroundImage: PropTypes.string,
		shelf: PropTypes.string,
		moveToShelf: PropTypes.func.isRequired
	};

	render() {
		const backgroundImage = `url("${this.props.backgroundImage}")`;

		return (

			<div className="book" data-id={this.props.id}>

				<div className="book-top">

					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: backgroundImage }}></div>

					<BookShelfChanger
						shelf={this.props.shelf}
						moveToShelf={this.props.moveToShelf} />

				</div>

				<div className="book-title">{this.props.title}</div>

				<div className="book-authors">
					{(this.props.authors || []).map((author, index) => (
						<div key={index}>{author}</div>
					))}
				</div>

			</div>
		);
	}
}

export default Book;
