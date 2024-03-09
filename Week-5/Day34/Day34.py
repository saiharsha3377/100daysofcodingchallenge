def calculate_area(length, width):
    area = length * width
    return area

rectangle_area = calculate_area(8, 5)
print("The area of the rectangle is:", rectangle_area)

person = {
    "name": "Sri✨",
    "age": 18,
    "city": "My Heart👀"
}

def print_person_info(person):
    print("Name:", person["name"])
    print("Age:", person["age"])
    print("City:", person["city"])

print_person_info(person)