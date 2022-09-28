// dependencies
const express = require('express');

// middleware for express.
const app = express();
const PORT = process.env.PORT || 3001; //process.env.PORT is an environment variable.

//connects to Json, connect PORT, and connect public folder to app
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})