import express from "express";
import authMiddleware from "./middlewares/authMiddleware.js";
import validationMiddleware from "./middlewares/validationMiddleware.js";

const app = express();
app.use(express.json());

app.post("/students", authMiddleware, validationMiddleware, (req, res) => {
  res.status(201).json({ message: "Student created successfully" });
});

app.put("/students/:id", authMiddleware, validationMiddleware, (req, res) => {
  res.status(200).json({ message: "Student updated successfully" });
});

app.delete("/students/:id", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Student deleted successfully" });
});

app.get("/students", (req, res) => {
  res.status(200).json({ message: "List of students" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
