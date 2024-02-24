class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  }  
  class Library {
    constructor() {
      this.books = [];
    }
    addBook(book) {
      this.books.push(book);
    }
    listBooks() {
      this.books.forEach(book => {
        console.log(`${book.title} by ${book.author}, ${book.pages} pages, Read: ${book.read ? 'Yes' : 'No'}`);
      });
    }
    markAsRead(title) {
      const book = this.books.find(book => book.title === title);
      if (book) {
        book.read = true;
      } else {
        console.log('Book not found!');
      }
    }
  }
  let book1= new Book('the hobbit', 'sri', 902, false);
  let library = new Library();
  library.addBook(book1);
  library.listBooks();