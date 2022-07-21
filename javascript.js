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
function calculate(numEntered) {
  if (numEntered == 'C') {
    document.getElementById('answer').value = '';
  }
  else if (numEntered == '+') {
    number = parseFloat(document.getElementById('answer').value);
  }
  else {
  document.getElementById('answer').value += numEntered;
  }
}

function add(...theArgs) {
    const numbers = [];
    let result = 0;
    numbers.push(...theArgs);
    console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    console.log(result);
}

function operate(num1, num2, operator) {
  if (operator == '+') {
    add(num1, num2);
  }
}

let number = 0;