const bookForm = document.getElementById('book-form');
const titleForm = bookForm.elements['title-input'];
const authorForm = bookForm.elements['author-input'];
const bookList = document.getElementById('books-list');

class Book {
  booksArray = [];

  constructor() {
    this.getLocalStorage();
  }

  inArray(id) {
    this.booksArray.forEach((element) => {
      if (element.Title.includes(id)) {
        return true;
      }
      return false;
    });
    // for (const book of this.booksArray) {
    //   if (book.Title.includes(id)) {
    //     return true;
    //   }
    // }
    // return false;
  }

  addBookToArray(title, author) {
    // Check for empty book and add book to booksArray
    if (title && author) {
      if (!this.inArray(title)) {
        this.booksArray = [...this.booksArray, {
          id: title,
          Title: title,
          Author: author,
        }];
      }
    }
  }

  displayPage() {
    bookList.innerHTML = '';
    this.booksArray.forEach(Book.addToPage);
  }

  static addToPage(book) {
    bookList.innerHTML += `
    <tr class="table-row" >
      <td class="title-col" >"${book.Title}" by ${book.Author}</td>
      <td class="btn-col"><button id="${book.Title}" type="submit" onclick= book.removeBook(this.id)>Remove</button></td>
    </tr>
    `;
  }

  // Update booksArray with data from localStorage
  getLocalStorage() {
    // Check if data is in storage and convert to js object
    if (localStorage.getItem('bookList')) {
      this.booksArray = JSON.parse(localStorage.getItem('bookList'));
    }
  }

  setLocalStorage() {
    localStorage.setItem('bookList', JSON.stringify(this.booksArray));
  }

  removeBook(title) {
    this.booksArray = this.booksArray.filter((book) => book.Title !== title);
    bookList.innerHTML = '';
    this.setLocalStorage('bookList', this.booksArray);
    this.displayPage();
  }
}

const book = new Book();

window.addEventListener('load', () => {
  book.displayPage();
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleForm.value;
  const author = authorForm.value;

  book.addBookToArray(title, author);
  book.setLocalStorage();
  book.displayPage();

  titleForm.value = '';
  authorForm.value = '';
});

// document.querySelector('.table-row').style.backgroundColor = 'red';