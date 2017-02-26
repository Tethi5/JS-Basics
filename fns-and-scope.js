//////////////////PROBLEM 1////////////////////

var name = 'Tyler';

function isTyler(name) {
  if (name === 'Tyler') {
    return true;
} else {
    return false;
}
}

function getName() {
  name = prompt("What is your name?");
  return name;
}



function welcome() {
  getName();
  alert("Welcome, " + name);
}
welcome();

//Parameter is a variable in the declaration of function.

//Argument is the actual value of this variable that gets passed to function.//Answer Here




//What are all the falsy values in JavaScript and how do you check if something is falsy?


//0,"",NaN,undefined,false  //Answer Here



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName() {
  return(name);
}



//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName
alert(newMyName);


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
  return myName;
}

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
