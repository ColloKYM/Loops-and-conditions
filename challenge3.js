let marks = [78, 45, -5, 92, 60, 101, 55, 38];
let validMarks = 0;
let passes = 0;
let fails = 0;
let total = 0;

let highest = 0;
let lowest = 100;

let highestStudent = 0;
let lowestStudent = 0;

for (let i = 0; i < marks.length; i++) {

    // Check invalid marks
    if (marks[i] < 0 || marks[i] > 100) {
        console.log(`Student ${i + 1}: invalid mark, skipped`);
        continue;
    }

    // Count valid marks and calculate total
    validMarks++;
    total = total + marks[i];

    // Determine grade
    let grade;

    if (marks[i] >= 80) {
        grade = "A";
    } else if (marks[i] >= 70) {
        grade = "B";
    } else if (marks[i] >= 60) {
        grade = "C";
    } else if (marks[i] >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Determine pass or fail
    let result;

    if (marks[i] >= 50) {
        result = "Pass";
        passes++;
    } else {
        result = "Fail";
        fails++;
    }

    // Find highest mark
    if (marks[i] > highest) {
        highest = marks[i];
        highestStudent = i + 1;
    }

    // Find lowest mark
    if (marks[i] < lowest) {
        lowest = marks[i];
        lowestStudent = i + 1;
    }

    // Print student's result
    console.log(`Student ${i + 1}: ${marks[i]} - Grade ${grade} (${result})`);
}

// Calculate average
let average = total / validMarks;

// Print summary
console.log("--------------------");
console.log(`Valid marks: ${validMarks}`);
console.log(`Passed: ${passes}`);
console.log(`Failed: ${fails}`);
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highest} (Student ${highestStudent})`);
console.log(`Lowest: ${lowest} (Student ${lowestStudent})`);
