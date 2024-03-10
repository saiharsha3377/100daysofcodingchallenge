#Task 1: Data Representation
library_name = "My Favourite Library"
library_location = "Visual Studio Code"

books = [
    {"title": "Intro to Python", "author": "Sai Harsha", "genre": "Programming"},
    {"title": "Python for Beginners", "author": "Flirty Coder", "genre": "Programming"},
    {"title": "Mystery of Pythonic Code", "author": "Nandan", "genre": "Mystery"},
    {"title": "After", "author": "Anna Todd", "genre": "Love"},
]

library_staff = {
    "librarian": {"name": "Vishwa", "age": 25, "role": "Librarian"},
    "assistant": {"name": "Abhay", "age": 28, "role": "Assistant Librarian"},
}

# Task 2: Control Flow
print("Books relevant to programming enthusiasts:")
for book in books:
    if book["genre"] == "Programming":
        print(f"{book['title']} by {book['author']}")

# Task 3: Functions and Dictionaries
def print_staff_info(staff_dict):
    for role, info in staff_dict.items():
        print(f"{info['role']}: {info['name']}, {info['age']} years old")

print("\nInformation about the librarian:")
print_staff_info({"librarian": library_staff["librarian"]})

# Task 4: User Interaction
favorite_genre = input("\nEnter your favorite book genre: ")
genre_books = [book["title"] for book in books if book["genre"] == favorite_genre]
if genre_books:
    print(f"\nThe library has the following books in the {favorite_genre} genre:")
    for book in genre_books:
        print(book)
else:
    print(f"\nSorry, the library doesn't have books in the {favorite_genre} genre.")
