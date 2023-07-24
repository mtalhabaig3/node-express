const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleWare/notFound");
const errorHandlerMiddleWare = require("./middleWare/errorHandler");
require("dotenv").config();

app.use(express.json());

app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port : ${port}...`));
  } catch (error) {
    console.error(error);
  }
};

start();
