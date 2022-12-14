// Manipulate Arrays With pop()
const myOldArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myOldArray.pop();

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

  //Golf Code
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
if (strokes == 1) {
  return names[0];
} else if (strokes <= par - 2){
  return names[1];
} else if (strokes === par - 1) {
  return names[2];
} else if (strokes === par) {
  return names[3];
} else if (strokes === par + 1){
  return names[4];
} else if (strokes === par + 2){
  return names[5];
} else {
  return names[6];
}
}

// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
switch(val) {
case 1:
answer = "alpha";
break;
case 2:
answer = "beta";
break;
case 3:
answer = "gamma";
break;
case 4:
answer = "delta";
break;
}
  return answer;
}

// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
switch (val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff";
  break;
}
  return answer;
}

//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
switch (val) {
  case 1:
  case 2:
  case 3:
  answer = "Low";
  break;
  case 4:
  case 5:
  case 6:
  answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
  answer = "High";
  break;
}
  return answer;
}

//Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";
switch (val) {
  case "bob":
  answer = "Marley";
  break;
  case 42:
  answer = "The Answer";
  break;
  case 1:
  answer = "There is no #1";
  break;
  case 99:
  answer = "Missed me by this much!";
  break;
  case 7:
  answer = "Ate Nine";
  break;
}
  return answer;
}

//Counting Cards
let count = 0;

function cc(card) {
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
   count++;
  break;
  case 7:
  case 8:
  case 9:
  count;
  break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
  count--;
  break;
}
if (count > 0){
  return count + " Bet";
} else{
  return count + " Hold";
}
}

//Accessing Object Properties with Variables
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16; 
const player = testObj[playerNumber];

//Updating Object Properties
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";

//Add New Properties to a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog["bark"] = "woof"


//Delete Properties from a JavaScript Object
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;

//Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";
  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  result = lookup[val]
  return result;
}

//Testing Objects for Properties 
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)){
  return obj[checkProp];
  } else{
    return "Not Found";
  }
}

//Manipulating Complex Objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Rihana",
    "title": "Moon Light",
    "release_year": 2005,
    "formats": [
      "DVD",
      "CD"
    ]
  }
];

//Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

//Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1];


//Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

//Iterate with JavaScript While Loops
const myArray0 = [];
let u = 5;
while (u >= 0) {
  myArray0.push(i);
  u--;
}

// Iterate with JavaScript For Loops
const myArray1 = [];
for (let i = 1; i <= 5; i++) {
  myArray1.push(i);
}

//Iterate Odd Numbers With a For Loop
const myArray2 = [];
for (let i = 1; i < 10; i+= 2) {
  myArray2.push(i);
}

//Count Backwards With a For Loop
const myArray3 = [];
for (let i = 9; i > 0; i -= 2) {
  myArray3.push(i);
}

//Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product = product * arr[i][j]
    }
  }
  return product;
}

//Iterate with JavaScript Do...While Loops
const myArray4 = [];
let i = 10;
do {
  myArray4.push(i);
  i++
} while (i < 5);

//Profile Lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
for (let i = 0; i < contacts.length; i++) {
  if (contacts[i].firstName === name) {
    if (contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
    } else {
      return "No such property";
    }
  }
}
return "No such contact"
} 

function createSecretHolder(secret) {
  return {
    getSecret: function() { return secret; },
    setSecret: function(v) { secret = v; }
  };
} 

//The Coupon Code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

//Power .bind()
Function.prototype.bind = function (ctx) {
  var ret = function() {
    return ret._fn.call(ctx);
  };
  ret._fn = this._fn || this;
  return ret;
};