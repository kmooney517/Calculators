//The function that returns the answer
var result = function (x, y) {
  return x + y;
};

//Getting the x and y elements from the user
var firstNumber = document.querySelector('#num_one');
var secondNumber = document.querySelector('#num_two');

// Variable Declaration
var num1, num2, finalAnswer

//Function to perform the math work
var mathWork = function () {
  num1 = Number(firstNumber.value);
  num2 = Number(secondNumber.value);
  finalAnswer = result(num1, num2);
  answer.textContent = finalAnswer;
};

//Button Click
calculateBtn.addEventListener('click', mathWork);
