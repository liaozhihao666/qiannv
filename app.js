const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
var users=require("./routes/users");
var products=require("./routes/products");
var cartItems=require("./routes/cartItems");
var app = express();
var server = app.listen(3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('../倩女'));
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},
  resave:false,
  saveUninitialized:true
}));
app.use("/users",users);
app.use("/products",products);
app.use("/cartItems",cartItems);

