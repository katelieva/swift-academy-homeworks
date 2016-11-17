
//var student = {naem: 'Ivan Petrov', grade: 'second', classLetter: 'A', number: '12'};
// console.log(student);

//var robot = {cordinateX: '', cordinateY: '', moves: '1', orientation: 'north' };
//


"use strict";

var bikes = [
    {
        name: "Drag",
        price: 200
    },
    {
        name: "RAM",
        price: 500
    },
    {
        name: "Scott",
        price: 1200
    }
];

console.log("Need a bike?..");

function logBikes(bikesList) {

    for (var i=0; i < bikes.length; i++) {
        var bike = bikesList[i];
        console.log(bike.name + ' : ' + bike.price + ' $ ');
    }
}
console.log(logBikes(bikes)); // => Drag: 200$
                            //    RAM: 500$
                            //    Scott: 1200$



