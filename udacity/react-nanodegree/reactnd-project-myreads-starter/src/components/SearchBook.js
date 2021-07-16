import React, {Component} from "react";
import BookItem from "./BookItem";
import * as BooksAPI from "../BooksAPI";
import debounce from 'lodash.debounce';
import {Link} from "react-router-dom";

/*
 NOTES: The search from BooksAPI is limited to a particular set of search terms.
 You can find these search terms here:
 https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

 However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
 you don't find a specific author or title. Every search is limited by search terms.
*/
class SearchBook extends Component {

    constructor(props) {
        super(props);
        this.handleOnChangeShelf = this.handleOnChangeShelf.bind(this);
        this.handleChangeDebounced = this.handleChangeDebounced.bind(this);
        this.searchChangeDebounced = debounce(this.handleSearchBooks, 500);
    }
    state = {
        books: [],
        currentlyReading: [],
        read: [],
        wantToRead: []
    }

    componentWillUnmount() {
        this.searchChangeDebounced.cancel();
    }

    componentDidMount() {
        const books = BooksAPI.getAll();
        books.then(
            (result) => {
                let currentlyReading = [];
                let read = [];
                let wantToRead = [];
                result.forEach(book => {
                    if (book.shelf === 'currentlyReading') {
                        currentlyReading.push(book.id);
                    } else if (book.shelf === 'read') {
                        read.push(book.id);
                    } else if (book.shelf === 'wantToRead') {
                        wantToRead.push(book.id);
                    }
                });
                this.setState({
                    currentlyReading: currentlyReading,
                    read: read,
                    wantToRead: wantToRead
                })
            }
        )
    }

    handleChangeDebounced(e) {
        this.searchChangeDebounced(e.target.value);
    }

    handleSearchBooks(e) {
        const value = e;
        if (value) {
            BooksAPI.search(value)
                .then(result => {
                    let books = [];
                    if (!result.error) {
                        const {currentlyReading, read, wantToRead} = this.state;
                        result.forEach(book => {
                            if (currentlyReading.includes(book.id)) {
                                book.shelf = 'currentlyReading';
                            } else if (read.includes(book.id)) {
                                book.shelf = 'read';
                            } else if (wantToRead.includes(book.id)) {
                                book.shelf = 'wantToRead';
                            } else {
                                book.shelf = 'none';
                            }
                            books.push(book);
                        })
                    }
                    this.setState({books: books});
                });
        } else {
            this.setState({books: []});
        }
    }

    handleOnChangeShelf(book, shelf) {
        BooksAPI.update(book, shelf)
            .then(response => {
                this.setState({
                    currentlyReading: response.currentlyReading,
                    read: response.read,
                    wantToRead: response.wantToRead
                })
            })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               onChange={this.handleChangeDebounced}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books.map(book => (
                                <BookItem key={book.id} book={book} handleOnChangeShelf={this.handleOnChangeShelf}/>
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBook;