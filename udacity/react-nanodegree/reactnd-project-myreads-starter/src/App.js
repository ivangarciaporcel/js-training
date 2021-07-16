import React from 'react'
import './App.css'
import MyReads from "./components/MyReads";
import SearchBook from "./components/SearchBook";
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {

    render() {
        return (
            <div className="app">
                <Route exact path='/' component={MyReads}/>
                <Route exact path='/search' component={SearchBook}/>
            </div>
        )
    }
}

export default BooksApp
