const inquirer = require("inquirer");
const validator = require("validator");
const db = require("./db");
require("console.table");

// testing if inquirer was imported correctly
// console.log(inquirer);

const startChoiceMenu = () => {
  inquirer
    .prompt({
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
    })
    .then((userChoice) => {
      switch (userChoice.startChoiceMenu) {
        case "View all Departments":
          viewAllDepartments();
          break;
        case "View all Roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add an Employee":
          addNewEmployee();
          break;
        case "Add a department":
          addNewDepartment();
          break;
        case "Add a Role":
          addNewRole();
          break;
      }
    });
};

// this statement is the same as the first case in our swtich statement above
// if(userChoice.startChoiceMenu === "View all Departments"){
//   viewAllDepartments()
// }

const viewAllDepartments = () => {
  db.findAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => startChoiceMenu());
};

const viewAllRoles = () => {
  db.findAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => startChoiceMenu());
};

const viewAllEmployees = () => {
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => startChoiceMenu());
};

const addNewDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "What is the name of the new department?",
      },
    ])
    .then((answers) => {
      const newDepartment = answers.department;

      db.addDepartment(newDepartment)
        .then(() => console.log(`Added ${newDepartment} to the database!`))
        .then(() => startChoiceMenu());
    });
};

const addNewRole = () => {
  inquirer
    .prompt([
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
        message:
          'What is the salary of the new role? (numbers only! i.e. "1234")',
        validate: (salaryInput) => {
          if (salaryInput && validator.isNumeric(salaryInput)) {
            return true;
          } else {
            console.log("Please enter a salary! (Required)");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const title = answers.role;
      const salary = answers.salary;

      db.findAllDepartments().then(([rows]) => {
        let departments = rows;

        const departmentChoices = departments.map(({ name, id }) => ({
          name: name,
          value: id,
        }));
        inquirer.prompt([
          {
            type: "list",
            name: "department",
            message:
              'What department is the new role in?',
            choices: departmentChoices, 
          },
        ])
        .then((answers) => {
          const newRole = {
            title: title,
            salary: salary,
            department: answers.department
          }
          db.addRole(newRole)
          .then(() =>
            console.log(
              `Added ${title} to the database!`
            )
          )
          .then(() => startChoiceMenu());
        })
      });
    });

};

const addNewEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the first name of the new employee?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the last name of the new employee?",
      },
    ])
    .then((answers) => {
      const firstName = answers.firstName;
      const lastName = answers.lastName;

      db.findAllRoles().then(([rows]) => {
        let roles = rows;

        const roleChoices = roles.map(({ title, id }) => ({
          name: title,
          value: id,
        }));

        inquirer
          .prompt({
            type: "list",
            name: "roleId",
            message: "What role will this employee be assigned to?",
            choices: roleChoices,
          })
          .then((response) => {
            let roleId = response.roleId;

            db.findAllEmployees().then(([rows]) => {
              let employees = rows;

              const employeeChoices = employees.map(
                ({ first_name, last_name, id }) => ({
                  name: `${first_name} ${last_name}`,
                  value: id,
                })
              );

              inquirer
                .prompt({
                  type: "list",
                  name: "managerId",
                  message: "What manager will this employee be assigned to?",
                  choices: employeeChoices,
                })
                .then((response) => {
                  let managerId = response.managerId;

                  const newEmployee = {
                    first_name: firstName,
                    last_name: lastName,
                    role_id: roleId,
                    manager_id: managerId,
                  };

                  db.addEmployee(newEmployee)
                    .then(() =>
                      console.log(
                        `Added ${firstName} ${lastName} to the database!`
                      )
                    )
                    .then(() => startChoiceMenu());
                });
            });
          });
      });
    });
};

const updateEmployeeRole = [
  {
    type: "input",
    name: "employee_id",
    message:
      'Which employee would you like to update? Please use employee id #! (i.e. "4")',
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

startChoiceMenu();

// VALIDATE STATEMENTN
// validate: (lastNameInput) => {
//   if (lastNameInput) {
//     return true;
//   } else {
//     console.log("Please enter a last name! (Required)");
//     return false;
//   }
// },
