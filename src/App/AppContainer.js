import React from "react";
import ".././App.css";
import BooksItemContainer from "../../src/BooksItem/BooksItemContainer";
import orderBy from "lodash/orderBy";
import { getBooksTC } from ".././redux/booksReducer";
import { connect } from "react-redux";
import { useEffect } from "react";
import App from ".././App/App";


const AppContainer = (props) => {
  const { books, getBooks } = props;

  


  useEffect(() => {
    getBooks();
  }, []);

  const booksArr = books.map((book, key) => {
    return <BooksItemContainer book={book} key={key} />;
  });

  return <App books={booksArr} />;
};

const filterBooks = (books, searchQuery) =>
  books.filter(
    (o) =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );

const sortBy = (books, filter, query) => {
  switch (filter) {
    case "price_high":
      return orderBy(books, "price", "desc");
    case "price_low":
      return orderBy(books, "price", "asc");
    case "name":
      return orderBy(books, "author", "asc");
    case "search":
      return filterBooks(books, query);
    default:
      return books;
  }
};

const mapStateToProps = (state) => {
  return {
    books: sortBy(
      state.books.books,
      state.filter.filter,
      state.filter.searchQuery
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () => {
      dispatch(getBooksTC());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
