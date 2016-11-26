"use strict";
//задачата за плодовете
var fruits = [
    {
        name: "banana",
        tropic: true
    },
    {
        name: "coconut",
        tropic: true
    },
    {
        name: "apple",
        tropic: false
    },
    {
        name: "orange",
        tropic: true
    }
];

function describe(fruit) {
    var result;

    if (fruit.tropic) {
        result = fruit.name + " is tropical.";
    }

    else {
        result = fruit.name + " is NOT tropical.";
    }

    return result;
}

for (let i=0;i<4;i++) {
    console.log(describe(fruits[i]));
}

