import { checkbox, Separator } from "@inquirer/prompts";

const answers = await checkbox({
  message: "Select a package manager",
  choices: [
    { name: "apple", value: "apple" },
    { name: "banana", value: "banana" },
    new Separator(),
    { name: "mohan", value: "mohan" },
    { name: "rohan", value: "rohan" },
  ],
  // pageSize: 2, // option count
  loop: true,
  // validate(answer) {
  //   if (answer[0].value === "apple") {
  //     return "not valid.";
  //   }
  //   return true;
  // },
  // required: true,
});

console.log(answers);

// import inquirer from "npm:inquirer";
