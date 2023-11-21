const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vik@shvs431998",
  database: "assignments",
});
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  const sql = "select * from notes";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.json("error");
    }
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql = "INSERT INTO notes (`title`, `content`) VALUES (?, ?)";
  const values = [req.body.title, req.body.content];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.json("error");
    }
    return res.json(data);
  });
});
app.put("/edit/:id", (req, res) => {
  const sql = "UPDATE notes SET title = ?, content = ? WHERE id = ?";
  const values = [req.body.title, req.body.content, req.params.id];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error updating data:", err);
      return res.json("error");
    }
    return res.json(data);
  });
});
app.delete("/notes/:id", (req, res) => {
  const sql = "DELETE FROM notes WHERE id=?";
  const values = [req.params.id];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error updating data:", err);
      return res.json("error");
    }
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("listening");
});
