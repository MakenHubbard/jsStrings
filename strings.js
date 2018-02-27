//Challenge #1

var numOfSandwiches = 8;
console.log("numOfSandwiches",numOfSandwiches);

// Challenge #2

var name = "Jeffery";
var string = "Hey, there my boy " + name + ". how is it going?";
console.log("string",string);

// Challenge #3

var DNA = "GCAT";
var RNA = DNA.replace('T','U');
console.log("RNA", RNA);

// Challenge #4

var animal = "goat";
var animal = "aLligator";
var animal = "jack rabbit";
var animal = "Kangaroo";
var animal = "BlUe WhAlE";
if (animal.toLowerCase() !== "alligator") {
    console.log("wide");
} else {
    console.log("small");
}

var yarn = 'the better string';
var domString = "<h4>" + yarn + "</h4>";

var myDiv = document.getElementById('yarn-holder');
myDiv.innerHTML = domString;
