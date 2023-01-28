// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('Express')
let serverData = {};
// Start up an instance of app
const app = express()
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(8000, () => {
    console.log("server is runing")
})

//save data 
app.post('/saveData', (req, res) => {
    serverData = req.body;
    res.json({ msg: 'done' })
})

//send data
app.get('/getData', (req, res) => {
    res.json(serverData)
})