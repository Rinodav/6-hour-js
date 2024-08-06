// let num = 42;
// let firstName = "Sali";
// const isProgrammer = true;

// firstName = true
// isProgrammer = false error beacuse const

/*
Can do
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 41
let _num = 12
let num_ = 12
let first_name = 'Elena' bad
let MyNum  = 34 good
let num42 = 10
*/

/*
Restricted
let 42num = '10'
let my-num = 42
let const
*/

// firstName = "SaliOne";
// const fullName = firstName + " " + "Abrams";

// alert(firstName);
/*
console.log("Test:", firstName);
console.log(num + 19);
console.log(num * 19);
console.log(num / 19);
console.log(num - 19);
console.log(num);
*/

// let num2 = num + 10;
// console.log(num, num2);
// num = num2 - num;
// num2 = num2 + 1;
// console.log(num, num2);
// num = num + num2;
// console.log(num);
// let num3 = num + (num / 20) * 2;
// console.log(num3);

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplicationBtn = document.getElementById("multiplication");
const divisionBtn = document.getElementById("division");
let action = "+";

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

multiplicationBtn.onclick = function () {
  action = "*";
};

divisionBtn.onclick = function () {
  action = "/";
};

function printResult(result) {
  if (result > 0) {
    resultElement.style.color = "green";
  } else {
    resultElement.style.color = "red";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  // if (actionSymbol == "+") {
  //   return num1 + num2
  // }
  // if (actionSymbol == "-") {
  //   return num1 - num2
  // }
  return actionSymbol === "+"
    ? num1 + num2
    : actionSymbol === "-"
    ? num1 - num2
    : actionSymbol === "*"
    ? num1 * num2
    : num1 / num2;
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
};

// submitBtn.onclick = function () {
//   const result = resultElement.getElementById("result");
//   if (action == "+") {
//     const sum = Number(input1.value) + Number(input2.value);
//     printResult(sum);
//   } else if (action == "-") {
//     const sum = Number(input1.value) - Number(input2.value);
//     printResult(sum);
//   }
//   resultElement.textContent = result;
// }
