const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const Event = require('./models/event')
require('dotenv').config()

const router = express.Router()

//connect to MongoDB

mongoose.connect(process.env.dbURL,{ useNewUrlParser: true }).then((result) => { 
    console.log('Connected to MongoDB')
app.listen (3000, () => {
    console.log('Server is running on port 3000')
});
})
.catch((err) => { console.error('Error connecting to MongoDB:',err) });


// Next initialize the application
const app = express()

// Set the view engine to ejs
app.set('view engine', 'ejs')   

// routing path
app.get('/', (req, res) => {

    res.send('Hello World!')
});

// start the server

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

//posting data

app.post('/submit-event', (req, res) => {
    const event = new Event(req,body);
    event.save()
        .then((result) => {
            res.redirect('/');})
        .catch((err) => {
            console.error(err);

        });
    });

    // Get all events

    router.get('/', (req, res) => {
        Event.find()
            .then((events) => {
                res.render('index', { title: 'All Events', events:result}) })
            .catch((err) => {
                console.error(err);
            })});

