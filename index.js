const bookForm = document.getElementById('book-form');
const titleForm = bookForm.elements['title-input'];
const authorForm = bookForm.elements['author-input'];
const bookList = document.getElementById('books-list');
const navList = document.getElementById('nav-list');
const navAdd = document.getElementById('nav-add');
const navContact = document.getElementById('nav-contact');
const listContainer = document.querySelector('.list-container');
const formContainer = document.querySelector('.form-container');
const contactInfo = document.querySelector('.contact-info');

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

navList.addEventListener('click', (e)=> {
	e.preventDefault(); 
	formContainer.style.display = 'none'; 
	contactInfo.style.display = 'none';
	listContainer.style.display = 'flex';
	book.displayPage();
}); 

navAdd.addEventListener('click', (e)=> {	
	e.preventDefault(); 
	contactInfo.style.display = 'none';
	listContainer.style.display = 'none'; 
	formContainer.style.display = 'flex';
	formContainer.style.flexDirection = 'column'; 
}); 

contactInfo.addEventListener('click', (e)=> {
	e.preventDefault(); 
	formContainer.style.display = 'none'; 
	listContainer.style.display = 'none'; 
	contactInfo.style.display = 'flex';	
	contactInfo.innerHTML = `
	<h2 class="contact-heading">Contact Information</h2>
	<p class="contact-paragraph">If you have any questions or you want to say "Hello",</p>
	<p class="contact-paragraph">you can reach out to us @ </p>
	<p class="email">info@awesomebooks.com</p>
	<p class="phone">+54367869011</p>
	` 
	
}); 