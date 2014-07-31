//NUMBERS
//these are examples of basic math using number datatypes and console.log()
  console.log(2 + 2 * 6 / 12);

//dividing a number by +0 results in infinity
  console.log(9 / +0);

//using modulo symbol between two numbers
  console.log(14 % 4);

//converting a number to a string
  var myNum = 467;
  myNum.toString();



//STRINGS
//finding length of a string using "string".length
  console.log("My name is Ansley Jones".length);

//concatenating several stings into one string
  console.log("I live at" + " 146" + " Line" + " Street");

//isolating parts of a string using substring()
  console.log("ansley jones".substring(0,6));




//BOOLEANS
//using boolean symbol to evaluate mathematical statement
  if (12/3 === 4) {
    confirm("Yay, Math!")
  }
  else{
    console.log("U R really dumb. Fo real")
  }

//comparing the length of two strings
  if ("Ansley".length >= "Jones".length){
      console.log("That's right")
  }
  else {
    prompt("What's your name?")
  }

//using ! in comparison statement
  if (14/2 === !7){
    console.log("Wrong")
  }
  else{
    console.log("Try again!")
  }



//ARRAYS
//use .shift to remove the first item in the array
var arr = ["Hey", "Jude", "don't", "make", "it", "bad"];
arr.shift();

//use .unshift to re-add "Hey"
var arr = ["Jude", "don't", "make", "it", "bad"];
arr.unshift("Hey");

//use .reverse to reverse the items in the array
var arr = ["Hey", "Jude", "don't", "make", "it", "bad"];
arr.reverse();

//us .join(" ") to join items with a space
var arr = ["Hey", "Jude", "don't", "make", "it", "bad"];
arr.join(" ");


//OBJECTS
var myCar = {
  make: "Honda",
  model: "Civic",

//add new property
myCar.year = 2005;


var me = {
  name: "Ansley",
  hair: "Red",
  freckles: function(x) {
    var numFreckles = x*x*x*x;
    console.log("Ansley has " + numFreckles + " " + "freckles.");
  }
}
//utilize function in object "me"
me.freckles(45);


var murakami = {
  books: ["1Q84", "After Dark", "Wind-Up Bird Chronicle", "Norwegian Wood"],
}

//change value of property
murakami.books.unshift("Spudnik Sweetheart");
murakami.books;



//FUNCTIONS
//Simple greeting function
function greet(){
  var yourName = prompt("What is your first name?");
  console.log("Nice to meet you," + " " + yourName);
}

greet("Ansley");


//function to find the distance between two coordinates
function square(x) {
  var sq = x * x;
  return sq;
}

function coorDistance(x,y,a,b) {
  var c = a - x;
  var d = b - y;
  var distance = Math.sqrt(square(c) + square(d));
  return distance;
}


//Your mom joke: uses random function (http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range)
function random(minimum, maximum) {
          var bool = true;
          while(bool) {
          var number = (Math.floor(Math.random()*maximum+1)+minimum);
            if (number > 20) {
              bool = true;
            }
            else {
              bool = false;
            }
          }
          return number;}

function momJoke() {
  var adj = ["fugly","freaky","fat", "phat", "pungent", "sticky", "cray", "nice", "dumpy", "cantankerous", "crusty", "ancient", "flabtastic", "stanky"];
  var numAdj = adj.length - 1;
  var mySent = "Your mom is ";
  mySent = mySent + adj[random(0,numAdj)];
  return mySent;
}

momJoke();
