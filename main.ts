import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { message: "please enter your sentence", type: "input", name: "value" },
]);
const words = answer.value.trim().split(" ")
console.log(`your sentence word count is ${words.length}`)