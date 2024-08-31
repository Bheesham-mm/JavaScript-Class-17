// code with Explain 
// Define an array with some names.
var arr = ["Name-1", "Name-2", "Name-3", "Name-4", "Name-5"];

// Generate a random index based on the length of the array.
var randomIndex = Math.floor(Math.random() * arr.length);

// Insert the string "RandomNum" at the random index.
// We use splice to insert at the random position without removing any existing elements.
arr.splice(randomIndex, 0, "RandomNum");

// Log the modified array to the console.
console.log(arr);


// var arr = ["Name-1", "Name-2", "Name-3", "Name-4", "Name-5"];
// var randomNum = Math.random();
// var imrovementRndom = (randomNum * 6) + 1; 
// arr.splice(Math.floor(imrovementRndom), "randomNum");
// console.log(arr)