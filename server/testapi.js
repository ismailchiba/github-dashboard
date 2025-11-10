const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res)=> {
    res.send('working');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; // Export the app for testing


//create a testing file for the API