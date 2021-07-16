import React, {Component} from "react";
import Bookshelf from "./Bookshelf";
import * as BooksAPI from "../BooksAPI";

class MyReads extends Component {

    constructor(props) {
        super(props);
        this.handleOnChangeShelf = this.handleOnChangeShelf.bind(this);
    }

    state = {
        books: [],
        currentlyReading: [],
        read: [],
        wantToRead: []
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
                    books: result,
                    currentlyReading: currentlyReading,
                    read: read,
                    wantToRead: wantToRead
                })
            }
        )
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

    getFilteredBooks(books, shelfIds) {
        return books.filter(book => shelfIds.includes(book.id));
    }

    render() {
        const {history} = this.props;
        const {books, currentlyReading, read, wantToRead} = this.state;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title="Currently Reading" books={this.getFilteredBooks(books, currentlyReading)}
                                   handleOnChangeShelf={this.handleOnChangeShelf}/>
                        <Bookshelf title="Want to Read" books={this.getFilteredBooks(books, wantToRead)}
                                   handleOnChangeShelf={this.handleOnChangeShelf}/>
                        <Bookshelf title="Read" books={this.getFilteredBooks(books, read)}
                                   handleOnChangeShelf={this.handleOnChangeShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => history.push('/search')}>Add a book
                    </button>
                </div>
            </div>
        );
    }
}

export default MyReads;