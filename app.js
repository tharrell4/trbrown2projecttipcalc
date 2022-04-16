/*
Tiffany Harrell
CSC 227.0002 Final Project
4/8/2022
*/

// Imports
const express = require('express')
const app = express()
const port = 8080

// Static Files
app.use(express.static('public'));


// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Tip Calculations' })
})

app.listen(port, () => console.info(`App listening on port ${port}`))