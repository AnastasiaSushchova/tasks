// Manipulate Arrays With pop()
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

// Manipulate Arrays With shift()
const myShiftArray = [["John", 23], ["dog", 3]];
const removedShiftFromMyArray = myArray.shift();

// Manipulate Arrays With unshift()
const myUnshiftArray = [["John", 23], ["dog", 3]];
myUnshiftArray.shift();
myUnshiftArray.unshift(["Paul", 35]);

// Assignment with a Returned Value
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);