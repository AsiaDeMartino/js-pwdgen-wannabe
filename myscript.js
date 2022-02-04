let yourName = prompt("Insert Name");
console.log(yourName)

let yourSurname = prompt("Insert Surname");
console.log(yourSurname)

let favouriteColor = prompt("Insert favourite Color");
console.log(favouriteColor)

let yourPassword = (yourName) + (yourSurname) + (favouriteColor) + "21";
console.log(yourPassword)


let htmlPassword = document.getElementById("password").innerHTML

document.getElementById("password").innerHTML = htmlPassword + yourPassword


// document.getElementById("password").innerHTML += yourPassword

