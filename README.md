# Assignment 21 - Google Books React-Based Search App

![react](https://img.shields.io/badge/library-react.js-purple/?style=plastic&logo=react)
![GitHub followers](https://img.shields.io/github/followers/KEDuran?logo=GitHub&style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/KEDuran/employee_directory?color=orange&logo=GitHub&style=plastic)

---

## Table of Contents

- [Description](#description)
- [Links for Submission Items](#links-for-submission-items)
- [Assignment Scope](#assignment-scope)
- [New CSS Library](#new-css-library)
- [Installation](#installation)
- [Final Output](#final-output)

---

## Description

This Google Books React-Based Search App is a MERN web application that will allow users to search and save Google Books buy using the Google Books API. Since this application was developed using React, as a result this application uses React components, helper functions, and lifecycle methods to query and display books based on user searches. Node.js, Express and MongoDB are also used in this appliction to allow the functionality that allows users to save books to review or purchase later.

_Return to TOC - [Table of Contents](#table-of-contents)_

---

## Links for Submission Items

Link to GitHub Repo - [ttps://github.com/KEDuran/Google-Books-React-Search](https://github.com/KEDuran/Google-Books-React-Search)

Link to deployed application on Heroku - [https://google-books-react-search-ked.herokuapp.com/](https://google-books-react-search-ked.herokuapp.com/)

Link to Portfolio to confirm assignment addition - [https://portfolio-react-ked.herokuapp.com/](https://portfolio-react-ked.herokuapp.com/)

_Return to TOC - [Table of Contents](#table-of-contents)_

---

## Assignment Scope

Here is a summar of the minimum requirements specified for this application:

### Feature Requirements

- Application must have the following two pages:

  - **Search** - In this page, the user can search for books via the Google Books API and render them on this page. User should also have the option to "View" a book (by clicking the view button), bringing them to the book on Google Books, or "Save" a book (by clicking the save button), saving it to the Mongo database.

  - **Saved** - this page should render all books saved into a backend Mongo database. User should also have the option to "View" a book (by clicking the view button), bringing them to the book on Google Books, or "Delete" a book (by clicking on the delete button), removing it from the Mongo database.

- Application should be a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

### Database Requirements

- Create a MongoDB database named `googlebooks`.

- Use [NPM mongoose](https://www.npmjs.com/package/mongoose) package to create a `Book` schema.

- The `Book` schema should have the following fields:

  - `title` - Title of the book from the Google Books API.
  - `authors` - The books's author(s) as returned from the Google Books API.
  - `description` - The book's description as returned from the Google Books API.
  - `image` - The Book's thumbnail image as returned from the Google Books API.
  - `link` - The Book's information link as returned from the Google Books API.

### Express Route Requirements

- The following Express routes need to be included in the application:

  - `/api/books` (get) - Should return all saved books as JSON.
  - `/api/books` (post) - Will be used to save a new book to the database.
  - `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
  - `*` (get) - Will load your single HTML page in `client/build/index.html`.

_Return to TOC - [Table of Contents](#table-of-contents)_

---

## New CSS Library

I took the opportunity to practice using another CSS library outside of Bootstrap. For this assignment, I used Material UI for the frontend design of the application. Material UI is a CSS library that is compatible with the React component structure.

Please click on the following link to reference the Material documentation - [https://material-ui.com/](https://material-ui.com/).

_Return to TOC - [Table of Contents](#table-of-contents)_

---

## Installation

### Required Technology

In order to success launch this web application, you will need to have the following installed in your local working environment:

- **Node.js** - Make sure Node.js is installed in your machine. If Node.js is not installed on your machine, [click here](https://nodejs.org/en/) to download the application.

### Instructions

All NPM packages needed for this application are already listed as dependencies in the `package.json` file. If running this web application in your local environment, please make sure to run the `npm install` command in your terminal at the root directory level in order to access all required package.

### Start Application

After all required dependencies have been installed using the instructions in the Installation Instructions section, run the command `npm start` in you the terminal under the root directory in order to launch the application.

_Return to TOC - [Table of Contents](#table-of-contents)_

---

## Final Output

I have included a brief demo recording to show the application's functionality and responsiveness. The web application's deployed link on Heroku is the source URL for this recording.

Link to Demo Recording - [https://drive.google.com/file/d/1uCWxluhvfPR_048mSyzd55AFgsNG9tJC/view?usp=sharing](https://drive.google.com/file/d/1uCWxluhvfPR_048mSyzd55AFgsNG9tJC/view?usp=sharing)

_Return to TOC - [Table of Contents](#table-of-contents)_
