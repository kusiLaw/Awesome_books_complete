import getLocalStorage from './getStorage.js';

class Book {
  constructor(title, author) {
    this.id = title;
    this.Title = title;
    this.Author = author;
    getLocalStorage();
  }
}

export default Book;
