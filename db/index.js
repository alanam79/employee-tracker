const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllDepartments() {
    return this.connection.promise().query("SELECT * from department");
  }

  findAllRoles() {
    return this.connection.promise().query("SELECT * from role");
  }

  findAllEmployees() {
    return this.connection.promise().query("SELECT * from employee");
  }

  addEmployee(employee) {
    return this.connection
      .promise()
      .query(
        "INSERT into employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
        [
          employee.first_name,
          employee.last_name,
          employee.role_id,
          employee.manager_id,
        ]
      );
  }

  addDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT into department (name) VALUES (?)", department);
  }

  addRole(role) {
    return this.connection
      .promise()
      .query("INSERT into role (title, salary, department_id) VALUES (?,?,?)", [
        role.title,
        role.salary,
        role.department,
      ]);
  }

  updateEmployee(employee) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        employee.role_id,
        employee.employee_id,
      ]);
  }
}

module.exports = new DB(connection);
