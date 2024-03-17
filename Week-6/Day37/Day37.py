def safe_division():
    while True:
        try:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            result = num1 / num2
            print(f"Result of division: {result}")
            break
        except ValueError:
            print("Error: Please enter numeric values.")
        except ZeroDivisionError:
            print("Error: Division by zero is not allowed.")

def main():
    while True:
        print("\n===== Safe Division Program =====")
        print("1. Perform Division")
        print("2. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            safe_division()
        elif choice == "2":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please enter a valid option.")

if __name__ == "__main__":
    main()
