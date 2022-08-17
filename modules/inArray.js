const inArray = (id, booksArray) => {
  booksArray.forEach((element) => {
    if (element.Title.includes(id)) {
      return true;
    }
    return false;
  });
};

export default inArray;