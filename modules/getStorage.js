const getLocalStorage = () => {
  // Check if data is in storage and convert to js object
  if (localStorage.getItem('bookList')) {
    return JSON.parse(localStorage.getItem('bookList'));
  }
  return [];
};

export default getLocalStorage;