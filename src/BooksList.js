import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

class BooksList extends Component {

	static propTypes = {
		books: PropTypes.array,
		moveToShelf: PropTypes.func.isRequired
	};

	render() {

		const books = this.props.books || [];

		return (
			<div className="list-books">

				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>

				<div className="list-books-content">
					<div>

						<Bookshelf
							title="Currently Reading"
							books={books.filter(b => b.shelf === 'currentlyReading')}
							moveToShelf={this.props.moveToShelf} />

						<Bookshelf
							title="Want to Read"
							books={books.filter(b => b.shelf === 'wantToRead')}
							moveToShelf={this.props.moveToShelf} />

						<Bookshelf
							title="Read"
							books={books.filter(b => b.shelf === 'read')}
							moveToShelf={this.props.moveToShelf} />

					</div>
				</div>

				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>

			</div>
		);
	}
}

export default BooksList;
