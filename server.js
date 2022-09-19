// dependencies
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;

//connects to Json, connect PORT, and connect public folder to app
app.use(express.urlencuded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})