// backend/routes/index.js
const express = require("express");
const router = express.Router();
const userRouter = require("./user"); //imported the user router from (./Routes/user)

router.use("/user", userRouter);

module.exports = router;
