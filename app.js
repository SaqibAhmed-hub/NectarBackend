const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./api/v1/user');

app.get('/', (req, res) => {
    res.json({
        name: 'hello',
        lastname: 'world'
    })
})

//Database Connection
mongoose.connect(
    'mongodb+srv://saqibvnb:9W6Z6I25H4bdw4zR@cluster0.fg5a1yt.mongodb.net/?retryWrites=true&w=majority'
    , { useUnifiedTopology: true, useNewUrlParser: true });


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});




var userValue = new User({
    username: 'username',
    password: 'password',
    email: 'email'
})

userValue.save();



//To Start the server , type 
//  npm run devStart 
const port = 3000
app.listen(port, () => {
    console.log(`server running on the port ${port}`)
})
