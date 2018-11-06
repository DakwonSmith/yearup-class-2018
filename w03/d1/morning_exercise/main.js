// Write a program that will `console.log` the numbers from 1 to 100. But for multiples of three `console.log` “Fizz” instead of the number and for the multiples of five `console.log` “Buzz”. For numbers which are multiples of both three and five `console.log` “FizzBuzz”.
function FizzBuzz(number) {
  for (let i = 1; i < 100; i++) {
    if (i % 3) {
      console.log("Fizz");
    }
    if (i % 5) {
      console.log("Buzz");
    }
    if (i % 3 && i % 5) {
      console.log("FizzBuzz");
    }
  }
}
FizzBuzz(100);
