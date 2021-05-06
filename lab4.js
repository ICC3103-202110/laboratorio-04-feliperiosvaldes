var readlineSync = require('readline-sync');

const view = (counter) => {
    return String(`Count: ${counter} \n(+)(-) \n(q) to quit `);
}
const update = (msg, counter) => {
    if (msg === "+"){
        counter += 1;
        return counter;
    }
    else if (msg === "-") {
        counter -= 1;
        return counter;
    }
    else {
        return counter
    }
}
const app = (counter) => {
    console.log(view(counter));
    while (true){
        var msg = readlineSync.question("What would you do? ");
        console.clear()
        if (msg === "q")
            break
        else {
            counter = update(msg, counter);
            const currentView = view(counter);
            console.log(currentView);
        }
    }
}
app(0);

