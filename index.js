// Calculation history array
const history = [];

// Helper function to log calculation history
function addToHistory(operand1, operand2, operator, result) {
  const record = {
    operand1,
    operand2,
    operator,
    result
  };
  history.push(record);
}

// Addition
function add(a, b) {
  const result = a + b;
  addToHistory(a, b, '+', result);
  return result;
}

// Subtraction
function subtract(a, b) {
  const result = a - b;
  addToHistory(a, b, '-', result);
  return result;
}

// Multiplication
function multiply(a, b) {
  const result = a * b;
  addToHistory(a, b, '*', result);
  return result;
}

// Division
function divide(a, b) {
  if (b === 0) {
    console.error("Error: Division by zero");
    return null;
  }
  const result = a / b;
  addToHistory(a, b, '/', result);
  return result;
}

// Display calculation history
function showHistory() {
  if (history.length === 0) {
    console.log("No calculations stored.");
  } else {
    console.log("Calculation History:");
    history.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.operand1} ${item.operator} ${item.operand2} = ${item.result}`
      );
    });
  }
}

// Example usage
add(10, 3);
subtract(10, 4);

showHistory();
