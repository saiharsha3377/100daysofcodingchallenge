class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.status = "available"

    def lend_book(self):
        if self.status == "available":
            self.status = "lent"
            print(f"The book '{self.title}' by {self.author} has been lent.")
        else:
            print("Sorry, this book is currently not available.")

    def return_book(self):
        if self.status == "lent":
            self.status = "available"
            print(f"Thank you for returning the book '{self.title}' by {self.author}.")
        else:
            print("This book is not currently on loan.")


class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)
        print(f"Book '{book.title}' by {book.author} has been added to the library.")

    def check_availability(self, title):
        for book in self.books:
            if book.title == title:
                if book.status == "available":
                    print(f"The book '{title}' is available in the library.")
                else:
                    print(f"The book '{title}' is currently on loan.")
                return
        print(f"The book '{title}' is not found in the library.")


def main():
    library = Library()

    # Adding books to the library
    book1 = Book("My Love To The Sri", "Sai Harsha")
    book2 = Book("After", "AnnaTodd")
    book3 = Book("1984", "George Orwell")

    library.add_book(book1)
    library.add_book(book2)
    library.add_book(book3)

    # Checking availability of books
    library.check_availability("My Love To The Sri")
    library.check_availability("1984")

    # Lending and returning books
    book1.lend_book()
    book2.lend_book()
    book1.return_book()
    book2.return_book()

    # Checking availability after lending and returning
    library.check_availability("After")
    library.check_availability("My Love To The Sri")


if __name__ == "__main__":
    main()
