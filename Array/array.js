var list = ["One", "two", "three", "four", "five"]

// console.log(list); //to display all element in array
// console.log(list.concat(["bee", "elephant"])); //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(list.shift()); //Removes the first element from an array and returns it
// console.log(list.pop()); //Removes the last element from an array and returns it
// console.log(list.push("Six")); //Appends new elements to the end of an array, and returns the new length of the array.
// console.log(list.sort());


// document.getElementById("array").innerHTML = list;
// document.getElementById("array2").innerHTML = list.concat(["Six", "Seven"]);
// document.getElementById("array3").innerHTML = list.shift();
// document.getElementById("array4").innerHTML = list.pop();
// document.getElementById("array5").innerHTML = list.push("eight");
// document.getElementById("array6").innerHTML = list.sort();

// console.log(list[0][3]);
document.write("<br>",list[0]);


var animal = [
    ["Blue", "red", "green", "yellow", "pink"], ["tup", "adu", "cvsu", "up", "pup"]
]
document.write("<br><br>",animal[1][1]);




var name = [function apple() {
    console.log("Alicia Paz Dizon");
}, "allannnnnn"];
// document.getElementById("arrayf").innerHTML = name[0];












var user = {
    name: "Allan Bernardo",
    age: "21",
    course: "BSIS",
    school: "TUP",
    address: "Bacoor Cavite",
}

document.getElementById("object").innerHTML = user;
document.getElementById("object2").innerHTML = user.name;
document.getElementById("object3").innerHTML = user.age;
document.getElementById("object4").innerHTML = user.course;
document.getElementById("object5").innerHTML = user.school;
document.getElementById("object6").innerHTML = user.address;
document.getElementById("object7").innerHTML = user.occupation = "Software Engineer";
