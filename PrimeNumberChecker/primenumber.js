let exampleNum = 4;

function isPrime(num) {
   if (num <= 1 ) return false;
   for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0){
           return console.log("This number is not prime");
       } 
   }
   return console.log("This number is prime");
}

isPrime(exampleNum);