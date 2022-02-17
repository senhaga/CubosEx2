let myAge = 30;
console.log(myAge);

let heightInMeters = 1.86;
console.log(heightInMeters);

//JS equivalent to Python's f' (?)
console.log(`I am ${myAge} years old and ${heightInMeters} meters tall`);


//'let' and 'const' work as common variable declarations. One acan also declare a variable using "var (value)", 
//but this is not recomended. Variables declared using 'var' are hoisted by the JS, which means they 
//are pulled up in the code and, therefore, can be used even before being delcared, as shown below.

console.log(`First calling of the hoistedVariable: ${hoistedVariable}`)

hoistedVariable = "0";
console.log(`Second calling of the hoistedVariable: ${hoistedVariable}`)

var hoistedVariable = "1";
console.log(`Third calling of the hoistedVariable: ${hoistedVariable}`)


