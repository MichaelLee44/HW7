/*
Michael Kellems
9/9/24
CIT 215
Prof. Kane
*/

display = document.querySelector(".display")

function loginValid(username, password) {
    if(username == "admin" && password == "secret") {
        return true
    }
    else {return}
}

let username = prompt("Enter your username.")
let password = prompt("Enter your password.")

if(loginValid(username, password)) {
    display.innerHTML = "Welcome Admin!"
    console.log("welcome Admin!")
} else if(!loginValid(username, password)) {
    display.innerHTML = "BAD LOGIN CREDENTIALS"
    console.log("BAD LOGIN CREDENTIALS")
}