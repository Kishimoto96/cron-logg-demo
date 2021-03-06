const express = require("express");
require("dotenv").config();
const {serverStatus} = require('./services/cron')
const connectToMongo = require("./db/connection");


const app = express();
const port = process.env.NODE_LOCAL_PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(port, () => {
  serverStatus('Server Status',`server is running smoothly at port ${port}`)
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});

module.exports = app;
