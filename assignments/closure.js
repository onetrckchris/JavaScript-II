// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */
const name = 'chris';
function sayName () {
  return `hey, im ${name}`;
}

// console.log(sayName());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;

  return () => {
    count = count + 1;
    return count;
  }
  // Return a function that when invoked increments and returns a counter variable.
};

// const newCounter = counter();
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  return {
    increment: () => {
      count = count + 1;
      return count;
    },
    decrement: () => {
      count = count - 1;
      return count;
    }
  }
};

const incrementCount = counterFactory().increment();
const decrementCount = counterFactory().decrement();

// console.log(incrementCount);
// console.log(incrementCount);
// console.log(incrementCount);
// console.log(incrementCount);
// console.log(decrementCount);
// console.log(decrementCount);
// console.log(decrementCount);
// console.log(decrementCount);