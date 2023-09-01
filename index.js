const firstNumber = prompt("Enter your first number")
const secondNumber = prompt('Enter your second number')

  let firstOperation = Number(firstNumber)+Number(secondNumber)
  let secondOperation = Number(firstNumber - secondNumber)
  let thirdOperation = Number(firstNumber * secondNumber)
  let fourthOperation = Number(firstNumber / secondNumber)

alert(`${firstNumber}+${secondNumber}=${firstOperation}
${firstNumber}-${secondNumber}=${secondOperation}
${firstNumber}*${secondNumber}=${thirdOperation}
${firstNumber}/${secondNumber}=${fourthOperation}`)