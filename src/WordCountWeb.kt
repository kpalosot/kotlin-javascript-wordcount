import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

fun main(args: Array<String>) {
    println("Hello world")

    val button = document.getElementById("button")

    button?.addEventListener("click", {
        println("Clicked!")
        val textWord = (document.getElementById("word_text")!! as HTMLInputElement).value

        val regexWord = """[^a-zA-Z]\W+""".toRegex()
        val regexEnd = """[\.|\n]""".toRegex()
        var words = textWord.toLowerCase().replace(regexEnd, " ").replace(regexWord, " ").split(" ")

        // Get a counted map of all the words
        val mappedWords = mutableMapOf<String, Int>()
        for (word in words) {
            if (word != "") {
                if (mappedWords[word] == null) {
                    mappedWords[word] = 1
                } else {
                    val currentWordCount = mappedWords[word]!!
                    mappedWords[word] = currentWordCount + 1
                }
            }
        }

        // Convert map to list
        val wordList = mappedWords.toList()

        // Sort the list
        val sortedList = wordList.sortedWith(compareByDescending { it.second })

        // Print a sorted list of the most popular words
        val htmlWordList = document.createElement("ul")
        for (word in sortedList) {
            var listItem = document.createElement("li")
            listItem.innerHTML = "${word.first} - ${word.second}"
            htmlWordList.appendChild(listItem)
            println("${word.first} - ${word.second}")
        }
//        document.body!!.appendChild(htmlWordList)
        val listCount = document.getElementById("list_count")
        listCount!!.appendChild(htmlWordList)
    })

}