# MyReads Project

MyReads is a bookshelf app that allows a user to select and organize books into three categories:
* Currently Reading
* Want to Read
* Read

It also provides a *search page*, so the user can search for books and add them to one of the mentioned categories 
right from search page.

This project uses an external backend server which is accessed using methods defined in file
[`BooksAPI.js`](src/BooksAPI.js).

## Installation
This project was created using [Create React App](https://github.com/facebookincubator/create-react-app).

Use node package manager [npm](https://www.npmjs.com/) to install MyReads:

```bash
npm install
```
To start the development server:

```bash
npm start
```

## Project Structure
```bash
├── README.md
├── SEARCH_TERMS.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── BooksAPI.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── components
    │   ├── BookItem.js
    │   ├── Bookshelf.js
    │   ├── MyReads.js
    │   └── SearchBook.js
    ├── index.css
    └── index.js
```

