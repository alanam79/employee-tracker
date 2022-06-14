const express = require("express");
const db = require("./db/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET TEST ROUTE
// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });

//  get all departments
// db.query(`SELECT * FROM departments`, (err, rows) => {
//     console.log(rows);
//   });

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
const sql = `INSERT INTO departments (id, department_name)
                VALUES (?,?)`;

const params = [1, 'Executive'];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// Default response for any other request (not found), this is a very important catchall, so must be the last route
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect((err) => {
    if (err) throw err;

// starts server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}🚀`);
});
  });
