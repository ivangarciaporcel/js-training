import React, {Component} from "react";
import BookItem from "./BookItem";
import PropTypes from 'prop-types';

class Bookshelf extends Component {

    render() {
        const {title, books, handleOnChangeShelf} = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.map(book => (
                                <BookItem key={book.id} book={book} handleOnChangeShelf={handleOnChangeShelf}/>
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    handleOnChangeShelf: PropTypes.func.isRequired
}
export default Bookshelf;