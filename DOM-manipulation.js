// 1. Use the reduce method to combine the words into a single sentence. 
let words = ["I", "love", "JavaScript"]; 
const combineWords = (arrOfWords) => {
    return arrOfWords.reduce((acc, word) => acc + ' ' + word, '').trim();
}

const combineWords2 = (arrOfWords) => {
    return arrOfWords.reduce((acc, word, index) => 
        index === 0 ? word : acc + ' ' + word, '');
}

console.log(combineWords(words)); // Output: "I love JavaScript"
console.log(combineWords2(words)); // Output: "I love JavaScript"