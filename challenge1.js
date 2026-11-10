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
