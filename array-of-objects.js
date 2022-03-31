// array of 4 objects->
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

/**Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

['JOHN', 'BABA', 'YAGA', 'WICK'] */
studentRecords.forEach(n => console.log(n.name.toUpperCase()))



/**Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }] */
let moreThan50 = studentRecords.filter(n => n.marks > 50)
console.log(moreThan50)


/**Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120. */
let reqStud = studentRecords.filter(n => n.marks > 50 && n.id > 120)
console.log(reqStud)


/**Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students. */
let sum = 0;
studentRecords.forEach(function sumAll(obj){
  sum = sum + obj.marks
})
console.log(sum) // 241


/**Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above. */
moreThan50.forEach(n => console.log(n.name))



/**Question 6: This time we are required to print the sum of marks of the students with id > 120. */
let idMoreThan120 = studentRecords.filter(n => n.id > 120)
let sumId = 0;
idMoreThan120.forEach(function sumAll(obj){
  sumId = sumId + obj.marks
})
console.log(sumId) // 143



/**Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50. */
studentRecords.forEach(function grace(obj) {
 if(obj.marks < 50) obj.marks = obj.marks + 15;
})
let sumGrace = 0;
studentRecords.forEach(function sumAll(obj){
  sumGrace = sumGrace + obj.marks
})
console.log(sumGrace) // 271



/** Question 8: Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.  */
let students = [ 
          {name: 'John', rollNo: 123, class : 10 },
          {name: 'Baba', rollNo: 101, class : 12 },
          {name: 'Wali', rollNo: 200, class : 09 },
          {name: 'Wick', rollNo: 102, class : 11 },
          {name: 'Nick', rollNo: 111, class : 08 },
          {name: 'Sama', rollNo: 123, class : 12 },
         ] 

console.log(students)