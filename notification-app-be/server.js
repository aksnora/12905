require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

let notifications = [
  { id: 1, message: "Welcome User", read: false }
];

app.get("/notifications", (req, res) => {
  res.json(notifications);
});

app.put("/notifications/:id", (req, res) => {
  notifications.forEach(n => {
    if (n.id == req.params.id) {
      n.read = true;
    }
  });
  res.json({ message: "Marked as read" });
});

app.listen(5000, () =>
  console.log("Server Running")
);