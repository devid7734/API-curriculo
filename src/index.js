const express = require('express');
const curriculoRoutes = require('./curriculo/routes');

const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
res.send("hello world");
});

app.use("/api/v1/curriculo", curriculoRoutes);

app.listen(port, () => {
  console.log("app running")  
});