// Modules
const express = require('express');


// initialize express
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log(`Application running on port ${PORT}`);
})