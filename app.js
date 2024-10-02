const express = require('express');
const fs = require('fs');
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: './config.env' }); //This command will read the variables on the config file and save them into node js envirnoment variables
//We need to 1st make the envirnoment variables be read from the congig file, before we require the app file (because we defined middleware for the development env in the app file and we need the env variables to be configured first for that)

const port = process.env.PORT;

app.listen( port, () => {
    console.log(`Task Manager is running on ${port}`);
});

app.use( (req, res, next) => {
    console.log('Hello from the middleware');
    next();
});

app.use( (req, res, next) => {
    console.lo
})