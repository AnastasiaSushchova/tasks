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

// Comparisons with the Logical And Operator
function testLogicalAnd(val) {
     if (val >= 25 && val <= 50){
        return "Yes";
      }
    return "No";
  }

//Introducing Else Statements
  function testElse(val) {
    let result = "";
    if (val > 5) {
      result = "Bigger than 5";
    }
    else {
      result = "5 or Smaller";
    }
    return result;
  }

  //Introducing Else If Statements
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if (val < 5) {
      return "Smaller than 5";
    }
  else {
    return "Between 5 and 10";
  }
  }

//Chaining If Else Statements
  function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num >= 5 && num < 10) {
    return "Small";
  } else if (num >= 10 && num < 15) {
    return "Medium";
  } else if(num >= 15 && num < 20) {
    return "Large";
  } else {
    return "Huge";
  } 
    return "Change Me";
  }