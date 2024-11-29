function greeting(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Call the callback function passed as an argument
}

function goodbye() {
    console.log('Goodbye!');
}

greeting('Alice', goodbye);

function anotherCallback() {
    console.log('Have a great day!');
}

greeting('Bob', anotherCallback);