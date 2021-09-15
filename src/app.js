document.addEventListener('DOMContentLoaded', () => {
  // Constructor Class for calculator
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const deleteButton = document.querySelector('[data-delete]')
  const previousOperandElement = document.querySelector('[data-previous-operand]')
  const currentOperandElement = document.querySelector('[data-current-operand]')

  class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
      this.previousOperandElement = previousOperandElement;
      this.currentOperandElement = currentOperandElement;
      //define variable previous and current operand strings.
      this.clear();
      //run clear function to clear strings in current and previous text elements
    }
    clear() {
      //defaults current values to clear
      this.previousOperand = '';
      this.currentOperand = '';
      this.operation = undefined;
    }
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
      //get currentOperand, convert it to string and then extract the 1st value all the way to the second to last value and set it to the currentOperand.
    }
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return; //prevent user to add more then one decimal value and return stops function from continuing.
      this.currentOperand = this.currentOperand.toString() + number.toString();
      //convert from number to string value to append after each number button is passed in.

    }
    chooseOperation(operation) {
      if (this.currentOperand === '') return;
      //if currentOperand is not empty return nothing
      if (this.previousOperand !== '') {
        this.compute();
      }
      //if previousOperand is not empty run compute function if user hits an operation button again and not equals.
      this.operation = operation;
      //pass in selected operation value and call the variable.
      this.previousOperand = this.currentOperand;
      //move current string value to previous string value.
      this.currentOperand = ''; //clear currendOperand value

    }
    compute() {
      let computation
      const prevValue = parseFloat(this.previousOperand);
      const currentValue = parseFloat(this.currentOperand);
      //convert string value to number value.
      if (isNaN(prevValue) || isNaN(currentValue)) return;
      //if user presses equals and if there is no previous or current values stop function.
      switch (this.operation) {
        case '+':
          computation = prevValue + currentValue;
          break;
        case '−':
          computation = prevValue - currentValue;
          break;
        case '×':
          computation = prevValue * currentValue;
          break;
        case '÷':
          computation = prevValue / currentValue;
          break;
        default:
          return
      }
      //use switch case statement to pass in current operation value and run calculation.
      this.currentOperand = computation;
      //set sum value from switch statement as currentOperand
      this.operation = undefined;
      //set current chosen operation to back to undefined
      this.previousOperand = '';
      //clear out previousOperand value.
    }

    getDisplayNumber(number) {
      const stringNumber = number.toString();
      //get string number
      const integerDigits = parseFloat(stringNumber.split('.')[0]);
      //get first integer value before decimal place
      const decimalDigits = stringNumber.split('.')[1]; //get string value after decimal place
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = '' //if user inputs just a decimal or nothing, pass in empty string.
      } else {
        integerDisplay =  integerDigits.toLocaleString('en', {
          maximumFractionDigits: 0}) //else, add commas to integer values and make sure there is no decimal places after this value.
      }
      if  (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}` //if there are values after the decimel. Concat integer value to decimal value with decimal and return value
      } else { //else, just display integer value and return value
        return integerDisplay
      }
    }
    //helper function to convert value to add comma on display.
    updateDisplay() {
      this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand);
      //set the currentOperand to display in the current text element.
      if (this.operation != null) {
        this.previousOperandElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        // set the previousOperand to display in the previous text element and concatonate current operant value IF there is a current operation.
      } else {
        this.previousOperandElement.innerText = '';
      } //else if the current operation is null, clear the previousOperand text element
    }

  };

  const calculator = new Calculator(previousOperandElement, currentOperandElement);

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    })
  });

  operationButtons.forEach(button =>
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    })
  );

  equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
  })

  allClearButton.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
  })
  deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
  })

  // Dark and Light Mode
  const lightModeBtn = document.querySelector('#lightModeBtn');
  const darkModeBtn = document.querySelector('#darkModeBtn');
  const darkModeSection = document.querySelector('.darkModeSection');
  const calcBackground = document.querySelector('.calculator-app');
  const body = document.querySelector('body');
  const elementBtns = document.querySelectorAll('button');
  const numberBtns = document.querySelectorAll('.numberBtns');
  console.log(elementBtns);
  console.log(numberBtns);

  lightModeBtn.addEventListener('click', () => {
    console.log('lightModeBtn clicked');
    calcBackground.style.backgroundColor = '#ffffff';
    body.style.backgroundColor = '#ebebeb';
    darkModeSection.classList.remove('darkModeClrForeground');
    darkModeSection.classList.add('lightModeClrForeground');
    previousOperandElement.style.color = 'black';
    currentOperandElement.style.color = 'black';
    numberBtns.forEach(element => element.style.color = 'black');
    elementBtns.forEach(element => element.classList.remove('darkModeClrForeground'));
    elementBtns.forEach(element => element.classList.add('lightModeClrForeground'));
  })
  darkModeBtn.addEventListener('click', () => {
    calcBackground.style.backgroundColor = '#202020';
    body.style.backgroundColor = '#333333';
    previousOperandElement.style.color = 'white';
    currentOperandElement.style.color = 'white';
    darkModeSection.classList.remove('lightModeClrForeground');
    darkModeSection.classList.add('darkModeClrForeground');
    numberBtns.forEach(element => element.style.color = 'white');
    elementBtns.forEach(element => element.classList.remove('lightModeClrForeground'))
    elementBtns.forEach(element => element.classList.add('darkModeClrForeground'))
    console.log('darkModeBtn clicked');
  })


})
