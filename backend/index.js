const express = require("express");
const User = require("./db"); // Import the User model
const cors = require("cors");

const rootRouter = require("./Routes/index");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", rootRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
