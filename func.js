function greet(name) {
    return `Hello, ${name}!`;
}

function isEven(num){
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function maxOfThree(a, b, c) {
    if(a >= b && a >= c) {
        return a;
    } else if(b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for(let char of str) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function isPalindrome(str) {
    const checkedStr = str.toLowerCase();
    const reversedStr = checkedStr.split('').reverse().join('');
    return checkedStr === reversedStr;
}

function finedLongestWord(sentence) {
    const words = sentence.split(' ');
    return Math.max(...words.map(word => word.length));
    // let longestWord = '';
    // for(let word of words) {
    //     if(word.length > longestWord.length) {
    //         longestWord = word;
    //     }
    // }
    // return longestWord;
}
console.log(finedLongestWord("black red yellow"));
// console.log(reverseString("John"));

const squareNum = (arrOfNum) => {
    return arrOfNum.map(num => num * num);
}

const combineWords = (arrOfWords) => {
    return arrOfWords.reduce((acc, word) => acc + ' ' + word, '').trim();
}

console.log(combineWords(["Hello", "world", "this", "is", "JavaScript"]));