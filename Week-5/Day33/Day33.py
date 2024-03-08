# Task 1: Using a for loop to print the square of each number from 1 to 5
for num in range(1, 6):
    square = num ** 2
    print(f"The square of {num} is {square}")

# Task 2: Using a while loop to print the cube of each number from 1 to 3
num = 1
while num <= 3:
    cube = num ** 3
    print(f"The cube of {num} is {cube}")
    num += 1

# Task 3: Creating a list of your favorite books and use a for loop to print each book's title
favorite_books = ["Book 1", "Book 2", "Book 3"]
for book in favorite_books:
    print(book)

# Task 4: Using a while loop to continuously ask the user to enter a number until they enter 0. Print the sum of all entered numbers.
sum = 0
while True:
    num = int(input("Enter a number (enter 0 to stop): "))
    if num == 0:
        break
    sum += num
print(f"The sum of all entered numbers is {sum}")