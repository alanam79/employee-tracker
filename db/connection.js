const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      // Your MySQL username,
      user: "root",
      // your mysql password
      password: "Mae,hN2Ab-O-",
      database: "employee_tracker",
    },
    console.log("Connected to the employee tracker database!❤️")
  );

  module.exports = db;