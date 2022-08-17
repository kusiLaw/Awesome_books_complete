// Update booksArray with data from localStorage
const setLocalStorage = (booksArray) => {
  localStorage.setItem('bookList', JSON.stringify(booksArray));
};

export default setLocalStorage;