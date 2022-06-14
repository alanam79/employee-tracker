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

// Default response for any other request (not found), this is a very important catchall, so must be the last route
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
// db.connect((err) => {
//     if (err) throw err;
//     console.log("Database connected.❤️");

// starts server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}🚀`);
});
//   });
