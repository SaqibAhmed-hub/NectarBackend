const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/route');
require('dotenv').config({ path: 'config/.env' })

//MiddleWare
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors()); // used for cross platform, frontend and Backend
app.use(express.json()); 
routes.loadRoutes(app);


//Database Connection
connectDB();


//To Start the server , type 
//  npm run devStart 
const port = process.env.PORT || 5001
app.listen(port, () => {
    console.log(`server running on the port ${port}`)
})


function connectDB() {
    mongoose.set("strictQuery", false);
    const dbconfigurl = process.env.DB_CONNECTION || ""
    mongoose.connect(
        dbconfigurl
        , {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    );

    const db = mongoose.connection;
    db.on("error", function () {
        console.error.bind(console, "connection error: ")
        process.exit();
    });
    db.once("open", function () {
        console.log("Connected to DB successfully");
    });
}

module.exports = app;
