import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

class Search extends Component {

	static propTypes = {
		books: PropTypes.array,
		moveToShelf: PropTypes.func.isRequired,
		query: PropTypes.string,
		search: PropTypes.func.isRequired
	};

	updateQuery = (event) => {
		this.props.search(event.target.value);
	};

	render() {
		return (

			<div className="search-books">

				<div className="search-books-bar">

					<Link className="close-search" to="/">Close</Link>

					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author"
							value={this.props.query}
							onChange={this.updateQuery} />
					</div>
				</div>

				<div className="search-books-results">
					<ol className="books-grid">

						{(this.props.books || []).filter(b => b).map(book => {

							const image = book.imageLinks ? book.imageLinks.thumbnail : null;

							return (
								<li key={book.id}>
									<Book
										id={book.id}
										title={book.title}
										authors={book.authors}
										backgroundImage={image}
										shelf={book.shelf}
										moveToShelf={shelf => this.props.moveToShelf(book.id, shelf)} />
								</li>
							);
						})}

					</ol>
				</div>

			</div>
		);
	}
}

export default Search;
