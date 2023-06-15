# **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# down from generation to generation. Imagine you're creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance
class Story:
    def __init__(self,length, moral_lessons, age_group):
        self.length = length
        self.moral_lessons = moral_lessons
        self.age_group = age_group

    def get_story_length(self):
        return self.length

    def get_moral_lessons(self):
        return self.moral_lessons

    def get_age_group(self):
        return self.age_group
    

story = Story("200pages","parenting","30s to 40s")
story.get_story_length()
print(story())







# **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# methods.

class Recipe:
    def __init__(self,country, ingredients, preparation_time, cooking_method, nutritional_info):
        self.country = country
        self.ingredients = ingredients
        self.preparation_time = preparation_time
        self.cooking_method = cooking_method
        self.nutritional_info = nutritional_info

    def display_recipe(self):
        print("Country: ", self.country)
        print("Ingredients: ", (self.ingredients))
        print("Preparation Time: ", self.preparation_time)
        print("Cooking Method: ", self.cooking_method)
        print("Nutritional Info: ", self.nutritional_info)

class MoroccanRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_info, manufactureDate):
        super().__init__('Morocco', ingredients, preparation_time, cooking_method, nutritional_info)
        self.manufactureDate = manufactureDate

    def display_recipe(self):
        super().display_recipe()
        print("manufacture date: ", self.manufactureDate)

class EthiopianRecipe(Recipe):
    def __init__(self,ingredients, preparation_time, cooking_method, nutritional_info, fatLevel):
        super().__init__('Ethiopia', ingredients, preparation_time, cooking_method, nutritional_info)
        self.fatLevel = fatLevel

    def display_recipe(self):
        super().display_recipe()
        print("fatLevel: ", self.fatLevel)

class NigerianRecipe(Recipe):
    def __init__(self,ingredients, preparation_time, cooking_method, nutritional_info,fufu):
        super().__init__('Nigeria', ingredients, preparation_time, cooking_method, nutritional_info)
        self.fufu = fufu

    def display_recipe(self):
        super().display_recipe()
        print("fufu: ", self.fufu)

moroccan_recipe = MoroccanRecipe("Moroccan", ["potaty", "lima", "Spices"], "1 hr", "fast", "lots of fat", "april 2021")


moroccan_recipe.display_recipe()
print("tasty")



# **Wildlife Preservation:** You're a wildlife conservationist working on a
# program to track different species in a national park. Each species has its own
# characteristics and behaviors, such as its diet, typical lifespan, migration
# patterns, etc. Some species might be predators, others prey. You'll need to

# create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# these classes might relate to each other through inheritance.




# **African Music Festival:** You're in charge of organizing a Pan-African music
# festival. Many artists from different countries, each with their own musical style
# and instruments, are scheduled to perform. You need to write a program to
# manage the festival lineup, schedule, and stage arrangements. Think about how
# you might model the `Artist`, `Performance`, and `Stage` classes, and consider
# how you might use inheritance if there are different types of performances or
# stages.






# Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values.






# 6. Implement a class called Student with attributes for name, age, and grades (a
# list of integers). Include methods to calculate the average grade, display the
# student information, and determine if the student has passed (average grade >=
# 60). Create objects for the Student class and demonstrate the usage of these
# methods.
# class Student:
#     def __init__(self,name,age,grades,numberr):
#         self.name = name
#         self.age = age
#         self.numberr = [](self,name,age,grades)
        
#     def calculate_average():

    






# 7. Create a FlightBooking class that represents a flight booking system. Implement
# methods to search for available flights based on destination and date, reserve
# seats for customers, manage passenger information, and generate booking
# confirmations.






# 8. Create a LibraryCatalog class that handles the cataloging and management of
# books in a library. Implement methods to add new books, search for books by
# title or author, keep track of available copies, and display book details.
# Book class
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def get_title(self):
        return self.title
    
    def get_author(self):
        return self.author

    def get_pages(self):
        return self.pages
class LibraryCatalog:
    def __init__(self):
        self.bookk = []

    def add_book(self, book):
        self.bookk.append(book)

    def search_by_title(self, title):
        return [book for book in self.bookk
                 if book.get_title() == title]

    def search_by_author(self, author):
        return [book for book in self.bookk 
                if book.get_author() == author]

    def display_book_details(self, title):
        find_book = None
        for book in self.bookk:
            if book.get_title() == title:
                find_book = book
                break

        if find_book:
            print("title:", find_book.get_title())
            print("tuthor:", find_book.get_author())
            print("page_Number:", find_book.get_pages())
        else:
            print("book is not available:", title)
booky = Book("Marylina worls","Asha kendi",78)
booky.get_title()