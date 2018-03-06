import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BooksList from './BooksList';
import Search from './Search';

class BooksApp extends Component {

  render() {
    return (
      <Router>
        <div className="app">

          <Route exact path="/search" component={Search} />

          <Route exact path="/" component={BooksList} />

        </div>
      </Router>
    )
  }
}

export default BooksApp;
