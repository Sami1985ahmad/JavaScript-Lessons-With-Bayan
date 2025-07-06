// write function to remove false values from an array
function removeFalseValues(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (!arr[index]) {
      arr.splice(index, 1);
      index--; // Adjust index after removal
    }
  }
  console.log(arr);
}

let testArray = [NaN, 0, 15, false, -22, "", undefined, 47, null];
removeFalseValues(testArray);

// write function to join array elements with a separator
function joinArrayElements(arr, separator) {
  let result = arr.join(separator);
  console.log(result);
}

let myColors = ["Red", "Green", "White", "Black"];
joinArrayElements(myColors, ",");
joinArrayElements(myColors, "+");

// write function to  inserts dashes (-) between each even number
function insertDashesBetweenEvens(numbers) {
  let arrOfNum = numbers.toString().split('').map(Number);
  for (let i = 0; i < arrOfNum.length - 1; i++) {
    if (arrOfNum[i] % 2 === 0 && arrOfNum[i + 1] % 2 === 0) {
      arrOfNum.splice(i + 1, 0, '-');
      i++; // Skip the newly added dash
    }
  }
  console.log(arrOfNum.join(' '));
}

let myNumbers = 25468;
insertDashesBetweenEvens(myNumbers);

let myArr = ["Full Stack", "Developer", "JavaScript", "React", "Node.js"];

const person = {
  name: "John",
age,
job: "Developer",}