const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/route')

//MiddleWare
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors()); // used for cross platform, frontend and Backend
routes.loadRoutes(app);


//Database Connection
connectDB();


//To Start the server , type 
//  npm run devStart 
const port = 3001
app.listen(port, () => {
    console.log(`server running on the port ${port}`)
})


function connectDB(){
    mongoose.set("strictQuery", false);
    mongoose.connect(
        'mongodb+srv://saqibvnb:9W6Z6I25H4bdw4zR@cluster0.fg5a1yt.mongodb.net/?retryWrites=true&w=majority'
        , { useUnifiedTopology: true, useNewUrlParser: true });
    
    
    const db = mongoose.connection;
    db.on("error", function() {
        console.error.bind(console, "connection error: ")
        process.exit();
    });
    db.once("open", function () {
        console.log("Connected to DB successfully");
    });
}

module.exports = app;
