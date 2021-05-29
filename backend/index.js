const express = require('express');
const mongoose = require('mongoose');
// const session = require('express-session');
const User = require('./models/user');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
const cookieparser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config();
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

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }))

app.use(cors());
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({extended:true}));
// app.use(passport.initialize());

// routes
app.use('/login', loginRouter)
app.use('/register', registerRouter)

// // use static authenticate method of model in LocalStrategy
// passport.use(new LocalStrategy(User.authenticate()));

// // use static serialize and deserialize of model for passport session support
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());



const port = process.env.PORT || 5000 
app.listen(port, ()=>{
   console.log('Server is running on port '+port); 
});