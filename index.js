const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pankaj:pankaj@cluster0.kbvks.mongodb.net/foodIndia?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database Connected Successfully'))
.catch((err) => console.error(err+'Database Connection Failed'));

app.get("/",(req, res)=>{
    res.send("Welcome to Food India Server");
});

const cart = require('./routers/cart');

app.use('/', cart);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("server is running on port "+PORT));