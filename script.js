// Variables
const firstNumber = 1024
const secondNumber = 9999
const degree =
  Math.floor(Math.random() * (firstNumber - secondNumber)) + secondNumber

// Functions
const startSpinning = () => {
  document.getElementById('sa').style.transform = 'rotate(' + degree + 'deg)'
}
