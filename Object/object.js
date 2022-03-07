var user = {
    name: "Allan Bernardo",
    age: 21,
    gender: "male",
    birthday: "10/02/2000",
    occupation: "Programmer",
    array: ["one", "two", "three", "four", "five"],
    funct: function() {
        document.write("Function inside object in JavaScript");
    }
}

document.write
    (
        user.funct(),  "<br>",
        user.name, "<br>", 
        user["occupation"] ,"<br>",
        user.age, "<br>",
        user.address = "Bacoor Cavite",
    );

document.getElementById("obj1").innerHTML = user.name;

console.log(user.name);

// exercise7
var facebook = {
    username: "allan123",
    password: "321allan"
}

var database = [
    {
        username: "allan123",
        password: "321allan"
    }
];

var newsfeed = [
    {
        username: "alicia123",
        timeline: "Im very excited for upcoming bootcamp"
    },
    {
        username: "joy123",
        timeline: "Im very thankful for my life"
    },
    {
        username: "maica123",
        timeline: "I have some news about the 2022 candidacy"
    }
];

// document.write(facebook.username, facebook.password);
// document.write(database[0]);

var userprompt = prompt("Enter your Username: ");
var passprompt = prompt("Enter your Password: ");

    function signin(user, pass) {
        if(user === database[0].username && pass === database[0].password){
            document.write(newsfeed[0].username);
            console.log(newsfeed[1]);
        }else{
            alert("Sorry, Your username and password is incorrect!");
        }
    }
    signin(userprompt, passprompt);


