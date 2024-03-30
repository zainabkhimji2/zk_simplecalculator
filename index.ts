#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "enter your first number",
    type: "number",
    name: "firstnumber",
  },
  {
    message: "enter your second number",
    type: "number",
    name: "secondnumber",
  },
  {
    message: "chose one the operation",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);

// CONDITIONAL STATMENT

if (answer.operator === "ADDITION") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "SUBTRACTION") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "MULTIPLICATION") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "DIVISION") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("ENTER A VALID OPERATION");
}
