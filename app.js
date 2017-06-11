/// <reference path="./typings/modules/express/index.d.ts" />

var express = require('express');
var swig = require('swig');
var gitoperate=require('./controller/gitoperate')
var app = express();
app.use(express.static("public"));
app.set("view engine", "html");
app.engine('html', swig.renderFile);
app.get('/', function (req, res) {
    res.render('index');
})
app.get('/controller/createbranch/',gitoperate.createBranch);
app.listen(3000)