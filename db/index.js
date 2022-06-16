const connection = require("./connection");

class DB{

    constructor(connection){
        this.connection = connection;
    }

    findAllDepartments(){
        return this.connection.promise().query(
            "SELECT * from department"
        )
    }

    findAllRoles(){
        return this.connection.promise().query(
            "SELECT * from role"
        )
    }

    findAllEmployees(){
        return this.connection.promise().query(
        "SELECT * from employee"       
        )
    }

    addEmployee(employee){
        return this.connection.promise().query(
            "INSERT into employee SET ?", employee
        )
    }




}

module.exports = new DB(connection)

