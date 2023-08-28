const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

async function getData() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

app.get("/", async (req, res) => {
  const data = await getData();
  res.status(200).json({ data });
});

app.listen(8080, (req, res) => {
  console.log("Server is Running on PORT 8080");
});
