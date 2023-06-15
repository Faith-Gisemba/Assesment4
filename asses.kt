// Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance
// Story class
fun main(){
    story = Story(200,listOf("Parenting","marriage"),"Early 30s and 40s")
    println(story)

    library = LibraryCatalog()

}

class Story(var length: Int, var moralLessons: List<String>, var ageGroup: String) {
    fun knowStoryLength(): Int {
        return length
    }

    fun learnMoralLessons(): List<String> {
        return moralLessons
    }

    fun getAgeGroup(): String {
        return ageGroup
    }
}


class StoryTeller(var name: String,var age: Int) {
    var stories: MutableList<Story> = mutableListOf()
    fun addStory(story: Story) {
        stories.add(story)
    }

}

class Translator {
    fun translating(content: String): String {
        var content.add(story)
    }
}

// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.






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
class Book(var title: String, var author: String, var pages: Int) 
class LibraryCatalog {private var bookk: MutableList<Book> = mutableListOf()

    fun addBook(book: Book) {
        books.add(book)
    }

    fun searchByTitle(title: String): List<Book> {
        return bookk.filter { book.title == title }
    }

    fun searchByAuthor(author: String): List<Book> {
        return bookk.filter { book.author == author }
    }

    fun displayBookDetails(title: String) {
        val book = bookK.find { book.title == title }
        if (book != null) {
            println("title: ${book.title}")
            println("author: ${book.author}")
            println("pageNumber: ${book.pages}")
        } else {
            println("book not available: $title")
        }
    }
}
