import setLocalStorage from './setStorage.js';
import getLocalStorage from './getStorage.js';
import Book from './Book.js';
import inArray from './inArray.js';
// import displayPage from './displayPage.js';

const addBook = (title, author) => {
  // Check for empty book and add book to booksArray
  if (title && author) {
    const book = new Book(title, author);
    let booksArray = getLocalStorage();
    if (!inArray(title, booksArray)) {
      booksArray = [...booksArray, book];
      setLocalStorage(booksArray);
      // displayPage(booksArray);
    }
  }
};

export default addBook;
