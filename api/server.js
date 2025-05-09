import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
