/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over.
Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line

let playerCardScore = Math.floor(Math.random() * 22)
let dealerCardScore = Math.floor(Math.random() * 22)

console.log( ` Player: ${playerCardScore}` ,"Dealer: " + dealerCardScore)

function blackJack(playerCardScore, dealerCardScore) {
  // checks if any are over 21
    if (playerCardScore  > 21 && dealerCardScore > 21) {
      console.log(0)
    } else if(playerCardScore >= 22 && dealerCardScore < 22) {
      console.log(dealerCardScore)
    } else if(dealerCardScore >= 22 && playerCardScore < 22) {
      console.log(playerCardScore)
    }
    // checks for highest number
      else if(playerCardScore > dealerCardScore && playerCardScore < 22) {
      console.log(playerCardScore)
    } else if (playerCardScore < dealerCardScore && dealerCardScore < 22) {
      console.log(dealerCardScore)
    } else if ((playerCardScore === dealerCardScore)) {
          return console.log(dealerCardScore)
    } else {
      console.log("error")
    }

  }

blackJack(playerCardScore, dealerCardScore)




// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number
of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 2:')

// Add your code below this line


//counts occurrences of the same word in a phrase
function wordCount(phrase) {

  const words = phrase.split(" ")
  const wordCountArray = {}

  words.forEach(function(word) {
    // if word is not defined; creates new
    // else adds +1 to the count
    if (!wordCountArray[word]) {
          wordCountArray[word] = 1
    } else {
      wordCountArray[word] = wordCountArray[word] + 1
    }
  })
    return wordCountArray;
}
// console.log(wordCount("Baby shark, doo doo doo doo doo doo"))

console.log(wordCount("olly olly in come free"));

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word".
The function should use the following table to
 calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 3:')

// Add your code below this line




// Objeect for letter scores
const scoreBoard = {
     1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
     2: ['D', 'G'],
     3: ['B', 'C', 'M', 'P'],
     4: ['F', 'H', 'V', 'W', 'Y'],
     5: ['K'],
     8: ['J', 'X'],
     10: ['Q', 'Z']
 }

 // count scores
 let sum = 0

//assigns a value to eaech letter
function lettersForScore(letter) {
  for (let index in scoreBoard) {
 	  if (Object.keys(scoreBoard).indexOf((scoreBoard[index].indexOf(letter) !== -1) ? index.toString() : '-1') !== -1) {
 	      return parseInt(index)
 	   }
  }
}

  //score counter
 scrabbleScore = function(word) {
   console.log(word)
   // gets the assignd value from the lettersForScore fn and totals it out
    if (word === null || word === "") {
 	      return 0
     }
     word.toUpperCase().split("").forEach(function(elem, index, array) {
 	     sum += lettersForScore(elem)
    })
     return sum;
 }

console.log(scrabbleScore("function"));



// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 4:')

// Add your code below this line

function isPalindrome(word) {
    let result
    const letters = word.toLowerCase().split("")
    const lettersCopy = letters.map((x) => x)

    lettersCopy.reverse()

    // checks to see if the elements in the two arrays are equal to each other
    letters.forEach((e1) => lettersCopy.forEach(e2 => {
      if(e1 !== e2) {
        result = false
      } else {
        result = true
        }
    }))

  return result
}

console.log(isPalindrome("Noon"))


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 5:')

// Add your code below this line

function doubleLetters(word) {
  let letters = word.toLowerCase().split("")
  let result = false

  letters.forEach((letter, index) => {
    if (letter === letters[index + 1]) {
      result = true
    }
  })

  return result
}

console.log(doubleLetters("APPLE"))




// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
