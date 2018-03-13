import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends Component {

	static propTypes = {
		title: PropTypes.string,
		books: PropTypes.array.isRequired,
		moveToShelf: PropTypes.func.isRequired
	};

	render() {
		return (

			<div className="bookshelf">

				<h2 className="bookshelf-title">{this.props.title}</h2>

				<div className="bookshelf-books">
					<ol className="books-grid">

						{this.props.books.map(book => (
							<li key={book.id}>
								<Book
									id={book.id}
									title={book.title}
									authors={book.authors}
									backgroundImage={book.imageLinks.thumbnail}
									shelf={book.shelf}
									moveToShelf={shelf => this.props.moveToShelf(book.id, shelf)} />
							</li>
						))}

					</ol>
				</div>
			</div>

		);
	}
}

export default Bookshelf;
