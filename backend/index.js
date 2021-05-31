const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/user');
const cookieparser = require('cookie-parser')
const cors = require('cors');

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/login'; 
mongoose.connect(dbUrl, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Database connected");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(cors({origin: 'https://dhruv-mern-spacex.netlify.app',credentials: true}));

// routes
app.use('/login', loginRouter)
app.use('/register', registerRouter)

// Listen on port
const port = process.env.PORT || 4000
app.listen(port, ()=>{
   console.log(`Server is running on port ${port}`); 
});
