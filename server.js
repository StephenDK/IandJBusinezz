// Modules
const express = require('express');
const bodyParser = require('body-parser');


// initialize express
const app = express();

app.use(bodyParser.json());

// import routes
require('./routes/emailRoute')(app);

const PORT = 5000;

app.listen(PORT, function() {
    console.log(`Application running on port ${PORT}`);
})

