import getLocalStorage from './getStorage.js';
import setLocalStorage from './setStorage.js';
// import displayPage from './displayPage.js';

// const bookList = document.getElementById('books-list');

const removeBook = (title) => {
  let booksArray = getLocalStorage();
  booksArray = booksArray.filter((book) => book.Title !== title);
  // bookList.innerHTML = '';
  setLocalStorage(booksArray);
  // displayPage(booksArray);
};

export default removeBook;
