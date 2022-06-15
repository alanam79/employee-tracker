const inquirer = require('inquirer');
// const db = require("./db/connection");
// require("console.table");

console.log(inquirer);

//  get all departments
// app.get("/api/departments", (req, res) => {
//   const sql = `SELECT * FROM departments`;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: rows,
//     });
//   });
// });

// get one department
// db.query(`SELECT * FROM departments WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// })

// delete one department
// db.query(`DELETE FROM departments WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// add a department
// const sql = `INSERT INTO departments (id, department_name)
//                 VALUES (?,?)`;

// const params = [1, 'Executive'];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

