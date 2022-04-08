// problem 1
// output
// alert 1,2,3,4

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// problem 2
// output 
// 1,0

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

// problem 3
// output 
// 3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
}

// problem 4
// output
// 20

// Write a code to calculate area of a rectangle using inner function.
// In this case outer function should accept parameter length and inner function should accept parameter breadth.

function OuterFunction() {

    var  length= 10;

    function InnerFunction() {
        var width=2;
        var area;
        console.log(area=length*width);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); 

// problem 5

function outer(){
    let count = 0;
    function inner(){   
        count += 1;   
        console.log(count);
    }
    return inner
} 
res = outer();
res();

// problem 6
// output
// 12

var a = 12;
(function () {
  alert(a);
})();

// problem 7
// output
// 12

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

// problem 8
// output
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);