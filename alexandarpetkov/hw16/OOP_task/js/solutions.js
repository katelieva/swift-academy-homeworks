function greeting(name) {
  return ('Hello, ' + name + '!');
};
// console.log(greeting('Sasho'));


function Person(firstName, lastName, bePolite) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = bePolite === undefined ? isPolite = true : isPolite = bePolite;

    this.bePolite = function (bePolite) {
        if (bePolite === false) {
           this.isPolite = false;
        } else {
            this.isPolite = true;
        }
    };

    this.introduce = function () {
        if (this.isPolite === true) {
            return ('Казвам се ' + this.firstName + ' ' + this.lastName + '.');
        } else {
            return ('Аз съм ' + this.firstName + '.');
        }
    };

    this.greet = function (otherPerson) {
        if (this.isPolite === true) {
            return ('Здравейте ' + otherPerson.firstName + ' ' + otherPerson.lastName + '!');
        } else {
            return ('Здрасти, ' + otherPerson.firstName + '!');
        }
    };

};
var man1 = new Person('Sasho', 'Petkov');
// console.log(Sasho);
// console.log(Sasho.introduce());
// console.log(Sasho.bePolite());
var lady1 = new Person('Zlatina', 'Iovkova');
// console.log(man1.bePolite(false));
// console.log(lady1.greet(man1));
// console.log(lady1.introduce());

console.log(man1.bePolite(true));
console.log(man1.greet(lady1));
console.log(man1.introduce());


// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
// };
//var Sasho = new Person('Sasho', 'Petkov');
//console.log(Sasho);
//console.log(Sasho instanceof Person);

function personGreeting (Person, beFormal) {
    if (beFormal === true) {
        return ('Hello, ' + Person.firstName + ' ' + Person.lastName + '!');
    } else {
        return ('Hi, ' + Person.firstName + '!');
    }
};
var Sasho = new Person('Sasho', 'Petkov');
// console.log(personGreeting(Sasho));

