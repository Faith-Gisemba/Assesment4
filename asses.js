// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance

class Story {
    constructor(length, moralLessons, ageGroup) {
      this.length = length;
      this.moralLessons = moralLessons;
      this.ageGroup = ageGroup;
    }
    getStoryLength() {
      return this.length;
    }
  
    getMoralLessons() {
      return this.moralLessons;
    }
  
    getAgeGroup() {
      return this.ageGroup;
    }
  }
  
  class StoryTeller {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.stories = [];
    }
  
    addStory(story) {
      this.stories.push(story);
    }
  }
  
  class Translator {
    translate(content) {
       content = story()
     
    }
  }

  
// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

// Recipe class
class Recipe {
    constructor(country, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
      this.country = country;
      this.ingredients = ingredients;
      this.preparationTime = preparationTime;
      this.cookingMethod = cookingMethod;
      this.nutritionalInfo = nutritionalInfo;
    }
    
    getCountry() {
      return this.country;
    }
  
    getIngredients() {
      return this.ingredients;
    }
    getPreparationTime() {
      return this.preparationTime;
    }
  
    getCookingMethod() {
      return this.cookingMethod;
    }
    
    getNutritionalInfo() {
      return this.nutritionalInfo;
    }
}
  class MoroccanRecipe extends Recipe {
    constructor(ingredients, preparationTime, cookingMethod, nutritionalInfo, manufactureDate) {
      super('Moroccon', ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.manufactureDate = manufactureDate;
    }
  
    getyearOfManufacture() {
      return this.manufactureDate;
    }
  
  }
  class EthiopianRecipe extends Recipe {
    constructor(ingredients, preparationTime, cookingMethod, nutritionalInfo, fatLevel) {
      super('Ethiopia', ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this. fatLevel =  fatLevel;
    }
  
    getfatLevel() {
      return this. fatLevel;
    }
  }
  class NigerianRecipe extends Recipe {
    constructor(ingredients, preparationTime, cookingMethod, nutritionalInfo, fufu) {
      super('Nigeria', ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.fufu = fufu;
    }
  
    getfufu() {
      return this.fufu;
    }
  }


//   const recipe = new instanceof
  
// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.





// **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.




// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.





// 6. Implement a class called Student with attributes for name, age, and grades (a
// list of integers). Include methods to calculate the average grade, display the
// student information, and determine if the student has passed (average grade >=
// 60). Create objects for the Student class and demonstrate the usage of these
// methods.






// 7. Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

// 8. Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.
// Book class
class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    getTitle() {
      return this.title;
    }
    getAuthor() {
      return this.author;
    }
     getPages() {
      return this.pages;
    }
  
  }
  
  class LibraryCatalog {
    constructor() {
      this.bookk = [];
    }
  
    addBook(book) {
      this.bookk.push(book);
    }
  
    searchByTitle(title) {
      return this.bookk.filter((book) => 
      book.getTitle() === title);
    }
  
    searchByAuthor(author) {
      return this.bookk.filter((book) => 
      book.getAuthor() === author);
    }
  
    displayBookDetails(title) {
      const book = this.bookk.find((book) => 
      book.getTitle() === title);
      if (book) {
        console.log(`title: ${book.getTitle()}`);
        console.log(`author: ${book.getAuthor()}`);
        console.log(`pageNumber: ${book.getPages()}`);
      } else {
        console.log(`book is not available: ${title}`);
      }
    }
  }

  const booky = new Book("River of money","Alisa jux",78)
  console.log(booky);
  