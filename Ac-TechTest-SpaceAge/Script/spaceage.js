//Planets Orbital Times 

 

var earth = 1; 

var mercury = 0.2408467; 

var venus = 0.61519726; 

var mars = 1.8808158; 

var jupitor = 11.862615; 

var saturn = 29.447498; 

var uranus = 84.016846; 

var neptune = 164.79132; 

var pluto = 248.000; 

 

function formatAge(age) {return age.toFixed( 2 ); } 

 

age = prompt("How old are you on Earth?"); 
 

console.log(age / earth); 

console.log(age / mercury);  

console.log(age / venus);  

console.log(age / mars);  

console.log(age / jupitor); 

console.log(age / saturn);  

console.log(age / uranus); 

console.log(age / neptune);  

console.log(age / pluto); 