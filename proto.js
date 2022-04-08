// Q1 : Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.

let parent = {
    eat : 'true',
    tall : 'true',
    mother : 'true',
    walk : function() {
        console.log('YES..!!!')
    }
}

let child = {
    food : 'true',
    school : 'true'
}

child.__proto__ = parent                                     // child inherits parent object.
console.log(child.eat)                 // true
console.log(child.tall)                // true
child.walk()                           // YES..!!!
console.log('child',child)                                   // child > food: 'true', school: 'true'



// Q2 : Write code to explain prototype chaining.

let obj = {
    name : 'Harry',
    city : 'Mumbai',
    job : 'true',
    moves : function() {
        console.log('Moves Object')
    }
}

let obj2 = {
    name : 'Agstya',
    walk : 'true'
}

let obj3 = {
    eat : 'true',
    talk : 'true'
} 

obj2.__proto__ = obj
obj3.__proto__ = obj

console.log(obj2.name)       // Agstya
console.log(obj2.job)        // true

console.log(obj3.eat)        // true
console.log(obj3.city)       // Mumbai

obj2.moves()                 // Moves object 
obj3.moves()                 // Moves object



// Q3 : Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.

let array = [ 23, 57, 25, 7, 10, 103, 111, 117, 333 ]
let sum = array.reduce((acc, curr) => acc + curr, 0)
console.log(sum)                                                   // 786



// Q4 : Write a JavaScript function to retrieve all the names of object's own and inherited properties.

let ipl = {
    bat : 'true',
    ball : 'true',
    stump : 'true'
}

let csk = {
    dhoni : 'true',
    highscore : 'true'
}

let rcb = {
    faf : 'true'
}

csk.__proto__ = ipl             // csk inherits ipl object.
rcb.__proto__ = ipl             // rcb inherits ipl object.

console.log(csk.hasOwnProperty('ball'))             // false
console.log(csk.hasOwnProperty('dhoni'))            // true
console.log(rcb.hasOwnProperty('dhoni'))            // false
console.log(rcb.hasOwnProperty('faf'))              // true