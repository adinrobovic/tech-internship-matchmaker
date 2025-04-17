//This code initializes an Express applicatoin and sets up a basic route that responds with "Hello World!" when you access the root URL.

const cors = require('cors');
const express = require('express');
const app = express();

//For development, allow all origins
app.use(cors());

//For production/ restrict origins
//app.use(cors({ origin: 'https://yourdomain.com}));

//Define a route handler for the default home page
app.get('/api/data', (req, res) => {
    res.send({ message: "Successfully fetched data", data: [1, 2, 3] });
});

//Set the port number
const PORT = process.env.PORT || 3000;

//Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Using connection string to set up the database connection

const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://adinrobovic:jgENUxZlryJKHiD8@internmatchcluster.tp7qa.mongodb.net/?retryWrites=true&w=majority&appName=InternMatchCluster';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log('MongoDB connection error: ', err));