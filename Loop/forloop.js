//for loop comes from user declared in a variable
var list = [
    "One piece",
    "Hunter X Hunter",
    "Fairy Tail",
    "Demon Slayer",
    "knockout"
]

for(var x=0; x < list.length; x++)
{
    document.write(list[x], "<br>");
}




// for loop comes from user input
// for(var i=0; i < 2; i++)
// {
//     var num = prompt("Enter list: ");
//     document.write([num], "<br>");
// }

var list1 =[];

for(var y=0; y < 5; y++) {
   list1.push(prompt("Enter array list: "));
    document.write(list1[y], "<br>");
}

