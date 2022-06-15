const inquirer = require("inquirer");
const validator = require("validator");
// const db = require("./db/connection");
// require("console.table");

// testing if inquirer was imported correctly
// console.log(inquirer);

const startChoiceMenu = [
  // inquirer
  // .prompt([
  {
    type: "list",
    name: "startChoiceMenu",
    message: "Please select an option below",
    choices: [
      "View all Departments",
      "View all Roles",
      "View all employees",
      "Add a department",
      "Add a Role",
      "Add an Employee",
      "Update an Employee Role",
    ],
  },
];

const addNewDepartment = [
  {
    type: "input",
    name: "newDepartment",
    message: "What is the name of the new department?",
    validate: (newDepartmentInput) => {
      if (newDepartmentInput) {
        return true;
      } else {
        console.log("Please enter a department! (Required)");
        return false;
      }
    },
  },
];

const addNewRole = [
  //     inquirer
  //   .prompt([
  {
    type: "input",
    name: "role",
    message: "What is the name of the new role?",
    validate: (roleInput) => {
      if (roleInput) {
        return true;
      } else {
        console.log("Please enter a role! (Required)");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "salary",
    message: 'What is the salary of the new role? (numbers only! i.e. "1234")',
    validate: (salaryInput) => {
      if (salaryInput) {
        return true;
      } else {
        console.log("Please enter a salary! (Required)");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "department",
    message:
      'What department is the new role in? Please type the number of the department shown above! (i.e. "2")',
    validate: (departmentInput) => {
      if (departmentInput) {
        return true;
      } else {
        console.log("Please enter a department! (Required)");
        return false;
      }
    },
  },
];

const addNewEmployee = [
  {
    type: "input",
    name: "firstName",
    message: "What is the first name of the new employee?",
    validate: (firstNameInput) => {
      if (firstNameInput) {
        return true;
      } else {
        console.log("Please enter a first name! (Required)");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the last name of the new employee?",
    validate: (lastNameInput) => {
      if (lastNameInput) {
        return true;
      } else {
        console.log("Please enter a last name! (Required)");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "role",
    message: "What is the name of the new role?",
    validate: (roleInput) => {
      if (roleInput) {
        return true;
      } else {
        console.log("Please enter a role! (Required)");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "manager",
    message: "Who is the manager of the new employee?",
    validate: (managerInput) => {
      if (managerInput) {
        return true;
      } else {
        console.log("Please enter the new employees manager! (Required)");
        return false;
      }
    },
  },
];

const updateEmployeeRole = [
  {
    type: "input",
    name: "employee_id",
    message:
      'Which employee would you like to update? Please use employee ID#! (i.e. "4")',
    validate: (employee_idInput) => {
      if (employee_idInput) {
        return true;
      } else {
        console.log("Please enter the employee ID#! (Required)");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "role_id",
    message:
      'What new role would you like for your employee? Please use role ID#! (i.e. "4")',
    validate: (role_idInput) => {
      if (role_idInput) {
        return true;
      } else {
        console.log("Please enter the role ID#! (Required)");
        return false;
      }
    },
  },
];

// const startChoices = async()=> {
// startChoices will have the sql queries and will need to const result = await inquirer.prompt(startChoiceMenu)
// }

//   opening greeting for user, will work with tutor on routing to sql functions
// const startServer = async() => {
//     console.log("Hello! Welcome to your personalized Employee Tracker! Please select a choice below.");

//     startChoices();
// };

//   start the server(app) startServer()
// startServer()
