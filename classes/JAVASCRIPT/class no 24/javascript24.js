// functions
// function nameOfFunction() {
//   // code to be executed
// }
// parameters ---- variables that are used in the function definition
// arguments ------ values that are passed to the function when it is called


// CSS
// primary = "blue"
// var(primary)

// function Addition(){
//     console.log("Function called");
// }
// Addition()
// Addition()
// Addition()  // NaN (not a number) because we are not passing any arguments to the function

// function Person( username, email, location){
//   console.log( username, email, location);
// }
// Person('Fatima', 'fatima@gmail.com', 'faisalabad' )
// Person('Noor', 'noor@gmail.com', 'faisalabad' )

function Addition( a, b){
    // console.log("sum is",a + b);
    return a + b
}
// Addition( 5, 10)
// Addition( 15, 20)   

for (let i = 0; i < 5; i++) {
    // console.log( i, i+1);
   const data = Addition( i, i+1)
//    console.log(data);
   if(data === 3){
    continue;
   }
    if(data === 7)
    {
        break;
    }
    console.log(data);
}
