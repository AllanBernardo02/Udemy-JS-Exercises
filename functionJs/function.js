// alert("Hello JavaScript in FILE")

// console.log("Hello JavaScript");
// console.log("Hello JavaScript");
// console.log("Hello JavaScript");
// console.log("Hello JavaScript");
// console.log("Hello JavaScript");
// console.log("Hello JavaScript");
// console.log("Hello JavaScript");
// console.log("Hello JavaScript");
// console.log("Hello JavaScript");
// console.log("Hello JavaScript");


//Function Declaration
function sayHello() {
	var car = "honda";
    console.log("Helloooo JavaScript");
	document.getElementById("function").innerHTML = car;
}

sayHello(); 

//Function Expression || Anonymous Function (a function without a name)
var sayBye = function() {
    console.log("Byeeeee JavaScript");
}

sayBye();

//Function try sing1
function sing1() {
    console.log("lahlahlahlahlaa");
    console.log("ahhhhhhhhhhh");
}

sing1();

 //Function try sing2
function sing2() {
    console.log("labdulabadulabdu");
    console.log("tantaranrantranagan");
}

sing2();

//Function with arguments or parameters
function sing(song) {
    console.log(song)
}

sing("astalabista");
sing("tsitsirikong kwayla");
sing("lets trejndfejf");

//Function with two parameter
function multiply(a, b) { // a and b is parameter
    if (a > 10 || b > 10) {
        return "Thats too hard";
    } else{
        return a * b;
    }
  
}

multiply(5, 10); // 5 and 10 is arguments



//Functions Exercise 5
function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
checkDriverAge();

var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge2();


function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}

checkDriverAge();