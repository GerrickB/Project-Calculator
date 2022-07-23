function calculate(numEntered) {
  // Clear
  if (numEntered == 'C') {
    document.getElementById('answer').value = '';
    firstNum = 0;
    secondNum = 0;
    operatorBool = '';
    operatorPass = '';
  }
  // Add
  else if (numEntered == '+') {
    if (operatorPass != '+') {
      firstNum = parseFloat(document.getElementById('answer').value);
    }
    if (operatorPass == '+') {
      secondNum = parseFloat(document.getElementById('answer').value);
      firstNum = firstNum + secondNum;
      document.getElementById('answer').value = firstNum;
    }
    operatorPass = numEntered;
    operatorBool = numEntered;
  }
  // Subtract
  else if (numEntered == '-') {
    if (operatorPass != '-') {
      firstNum = parseFloat(document.getElementById('answer').value);
    }
    if (operatorPass == '-') {
      secondNum = parseFloat(document.getElementById('answer').value);
      firstNum = firstNum - secondNum;
      document.getElementById('answer').value = firstNum;
    }
    operatorPass = numEntered;
    operatorBool = numEntered;
  }
  // Multiply
  else if (numEntered == '*') {
    if (operatorPass != '*') {
      firstNum = parseFloat(document.getElementById('answer').value);
    }
    if (operatorPass == '*') {
      secondNum = parseFloat(document.getElementById('answer').value);
      firstNum = firstNum * secondNum;
      document.getElementById('answer').value = firstNum;
    }
    operatorPass = numEntered;
    operatorBool = numEntered;
  }
  //Divide
  else if (numEntered == '/') {
    if (operatorPass != '/') {
      firstNum = parseFloat(document.getElementById('answer').value);
    }
    if (operatorPass == '/') {
      secondNum = parseFloat(document.getElementById('answer').value);
      firstNum = firstNum / secondNum;
      document.getElementById('answer').value = firstNum;
    }
    operatorPass = numEntered;
    operatorBool = numEntered;
  }
  else if (numEntered == '=') {
    secondNum = parseFloat(document.getElementById('answer').value);
    operate(firstNum, secondNum, operatorPass);
    operatorPass = '';
    operatorBool = '';
  }
  else {
    if (operatorBool != '') {
      operatorBool = '';
      document.getElementById('answer').value = '';
    }
    document.getElementById('answer').value += numEntered;
  }
}

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  if (operator == '+') {
    document.getElementById('answer').value = add(num1, num2);
  }
  if (operator == '-') {
    document.getElementById('answer').value = subtract(num1, num2);
  }
  if (operator == '*') {
    document.getElementById('answer').value = multiply(num1, num2);
  }
  if (operator == '/') {
    document.getElementById('answer').value = divide(num1, num2);
  }
}

let firstNum = 0;
let secondNum = 0;
let operatorBool = '';
let operatorPass = '';

/*function add(...theArgs) {
  const numbers = [];
  let result = 0;
  numbers.push(...theArgs);
  console.log(numbers);

  for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
  }

  console.log(result);
  //document.getElementById('answer').value = result;
  return result;
}*/

/*function calculate(numEntered) {
    if (numEntered == 'C') {
      document.getElementById('answer').value = '';
    }
    else if (numEntered == '=') {
      document.getElementById('answer').value = eval(document.getElementById('answer').value);
    }
    else {
      document.getElementById('answer').value += numEntered;
    }
  } 
*/