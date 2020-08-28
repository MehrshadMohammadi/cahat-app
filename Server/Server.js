const path = require('path')
const express = require('express')
const pathStatic = path.join(__dirname,'../Public')
var app = express();
app.use(express.static(pathStatic))
app.listen(3000,()=>{console.log(`this run port 3000`)})


