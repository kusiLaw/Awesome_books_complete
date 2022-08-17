// import addToPage from './addToPage.js';
import removeBook from './removeBook.js';
import getLocalStorage from './getStorage.js';

const bookList = document.getElementById('books-list');

const displayPage = (booksArray) => {
  bookList.innerHTML = '';
  booksArray.forEach((book) => {
    bookList.innerHTML += `
  <tr class="table-row" >
  <td class="title-col" >"${book.Title}" by ${book.Author}</td>
  <td class="btn-col"><button class="btn" id="${book.Title}" type="submit">Remove</button></td>
  </tr>
  `;
  });

  const btnParent = document.querySelectorAll('.btn-col');
  btnParent.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.classList.contains('btn')) {
        removeBook(e.target.id);
        displayPage(getLocalStorage());
      }
    });
  });
};

export default displayPage;