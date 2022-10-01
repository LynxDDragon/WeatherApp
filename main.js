/* 
Given an array of strings words, return the words that can be typed using letters of the 
alphabet on only one row of American keyboard like the image below.
In the American keyboard:
the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:
Input: words = ["omk"]
Output: []
Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"] 
*/


var findWords = function (words) {
    return words.filter((word) => checkWord(word))
}

/* 
* Take in a word and return
* true or false depending on if the word
* can be written with a single keyboard row
*/
const checkWord = function(word) {
    /* Define some data structure of keyboard rows */
    const keyboardRows = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
    ]

    const wordArr = word.toLowerCase().split('')

    /* Loop through keyboardRows */
    for (const row of keyboardRows) {
        let isRowValid = true
        /* Check each character of the input word */
        for (const letter of wordArr) {
            /* if the character is not in my row, skip to the next row */
            if (!row.includes(letter)) {
                isRowValid = false
                break
            }
            /* if we get through the row without ever skipping, the word IS valid, and we can return true */
        }
        if (isRowValid) {
            return true
        }
    }
    /* Return false, because we know the word is not valid */
    return false
}
    
console.log(findWords(["Hello","Alaska","Dad","Peace"]))
console.log(findWords(["omk", "slkdjfhsldkfjsldkfjalksdjalsdkjasdlkjdgflksjdfjkl"]))
console.log(findWords(["adsdf","sfd"]))