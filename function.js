// q1. Create one function with zero parameter having a console statement.

const print = function (){
    console.log("Heyy!");
}

//q2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

const sum = function(a,b){
    console.log(`Sum of  ${a}, ${b} is ${a+b}`);
}
sum(3,4);

//q3. Create one arrow function

const arrow = ()=> {console.log('i m arrow function')}
arrow();

// q4.  Output -> undefined
/**Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl (); */



// q5. Output -> udefined & 21
/** Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
*/

// q6. Output -> 20 ,40 & f a(){...}
/**Print output

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
}; */

//q7. Write a function that accepts parameter n and returns factorial of n.

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
result=factorial(4);
console.log(result);
