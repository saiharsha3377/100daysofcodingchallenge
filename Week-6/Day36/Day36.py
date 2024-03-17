import os
import datetime

DIARY_FILE = "diary.txt"

def add_diary_entry():
    content = input("Enter your diary entry: ")
    now = datetime.datetime.now()
    with open(DIARY_FILE, "a") as file:
        file.write(f"{now.strftime('%Y-%m-%d %H:%M:%S')}: {content}\n")
    print("Diary entry added successfully.")

def read_diary_entries(date):
    with open(DIARY_FILE, "r") as file:
        entries = file.readlines()
        for entry in entries:
            if date in entry:
                print(entry.strip())

def main():
    if not os.path.exists(DIARY_FILE):
        with open(DIARY_FILE, "w"):
            pass

    while True:
        print("\n===== Diary Application =====")
        print("1. Add Diary Entry")
        print("2. Read Diary Entries for a Date")
        print("3. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            add_diary_entry()
        elif choice == "2":
            date = input("Enter the date (YYYY-MM-DD): ")
            read_diary_entries(date)
        elif choice == "3":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please enter a valid option.")

if __name__ == "__main__":
    main()
