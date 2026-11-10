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