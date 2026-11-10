console.log("Hello World!")
alert("Welcome to my first website!")
console.log("My name is Collins");
console.log(100)
console.log(20 + 30)
let name = prompt("What is your name?")
alert("Welcome " + name)

function welcomeStudent() {
    let name = prompt("What is your name")
    alert("Hello " + name + "!  Welcome to Javascript.")
    console.log("A student visited the website.")
}

let goal = 10000;
let month = 1;
let saving = 100;
let total = 0;

while (total < goal) {
     if (month > 24) {
        break;
    }
    total = total + saving;
    month = month + 1;
    saving = saving + 50;
    if (saving >= 500) {
        console.log(`Month ${month}: saved KES ${saving}, total KES ${total} - Big month!`);
    } else {
        console.log(`Month ${month}: saved KES ${saving}, total KES ${total}`);
    }

    
}

console.log(`Goal reached in month ${month - 1} with KES ${total}!`);
for (let a = 1; a <= 30; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("Chai and Mandazi")
    }
    else if (a % 3 === 0) {
        console.log("chai")
    }
    else if (a % 5 === 0) {
        console.log("Mandazi")
    }
    else {
        console.log(a)
    }
}


