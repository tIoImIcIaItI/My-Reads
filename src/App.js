/*eslint "dot-location": ["error", "object"]*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BooksList from './BooksList';
import Search from './Search';

class BooksApp extends Component {

	state = {
		books: [],
		query: '',
		searchResults: []
	};

	componentDidMount() {
		BooksAPI.
			getAll().
			then(books => this.setState({ books })).
			catch(console.error);
	}

	moveToShelf = (id, shelf) => {
		const books = this.state.books;

		const theBook = books.find(b => b.id === id);

		if (!theBook) {
			BooksAPI.
				get(id).
				then(book => {
					book.shelf = shelf;
					books.push(book);
					this.setState({ books }, () => {
						BooksAPI.
							update(book, shelf).
							then(() => {
								book.shelf = shelf;
								this.setState({ books });
							}).
							catch(console.error);
					});
				}).
				catch(console.error);
		}
		else {
			BooksAPI.
				update(theBook, shelf).
				then(() => {
					theBook.shelf = shelf;
					this.setState({ books });
				}).
				catch(console.error);
		}
	};

	search = (query) => {

		this.setState({ query }, () => {

			if (query)
				BooksAPI.
					search(query).
					then(books => { return (!books || books.error) ? [] : books; }).
					then(books => this.setState({ searchResults: books })).
					catch(error => {
						console.error(error);
						this.setState({ searchResults: [] });
					});
			else
				this.setState({ searchResults: [] });
		});
	};

	render() {
		return (
			<Router>
				<div className="app">

					<Route exact path="/search" render={() =>
						<Search
							books={this.state.query ? this.state.searchResults : []}
							allBooks={this.state.books || []}
							query={this.state.query}
							moveToShelf={this.moveToShelf}
							search={this.search} />} />

					<Route exact path="/" render={() =>
						<BooksList
							books={this.state.books}
							moveToShelf={this.moveToShelf} />} />

				</div>
			</Router>
		);
	}
}

export default BooksApp;
