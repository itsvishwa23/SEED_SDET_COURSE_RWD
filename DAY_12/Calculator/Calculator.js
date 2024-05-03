function hid() {
 
  document.getElementById("tbl").style.visibility = "hidden";
}

function show() {
  event.preventDefault();
  document.getElementById("tbl").style.visibility = "visible";
  performChecks(); // Call the function to perform additional checks
}

// Function to check if a number is a factorial
function checkFactorial(num) {
  if (num < 0) {
    return false; // Factorial of negative number is undefined
  }
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial === num;
}

// Function to check if a number is prime
function checkPrime(num) {
  if (num <= 1) {
    return false; // 0 and 1 are not prime numbers
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If it's divisible by any number other than 1 and itself, it's not prime
    }
  }
  return true;
}

// Update your existing add function to perform addition and display result
function add() {
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var c = a + b;
  var show = document.getElementById("showadd");
  show.innerHTML = c;
}

function subtract() {
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var c = a - b;
  var show = document.getElementById("showsub");
  show.innerHTML = c;
}

function multiply() {
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var c = a * b;
  var show = document.getElementById("showmul");
  show.innerHTML = c;
}

function divide() {
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  if (b !== 0) {
    var c = a / b;
    var show = document.getElementById("showdiv");
    show.innerHTML = c;
  } else {
    var show = document.getElementById("showdiv");
    show.innerHTML = "Cannot divide by zero!";
  }
}

// Function to perform additional checks
function performChecks() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  // Check if num1 is a factorial and display the result
  document.getElementById("showfact1").innerHTML = checkFactorial(num1)
    ? "Yes"
    : "No";

  // Check if num2 is a factorial and display the result
  document.getElementById("showfact2").innerHTML = checkFactorial(num2)
    ? "Yes"
    : "No";

  // Check if num1 is prime and display the result
  document.getElementById("showprime1").innerHTML = checkPrime(num1)
    ? "Yes"
    : "No";

  // Check if num2 is prime and display the result
  document.getElementById("showprime2").innerHTML = checkPrime(num2)
    ? "Yes"
    : "No";
}
