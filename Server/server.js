const  http = require('http');
require('dotenv').config();
const app = require('./app');
// const path = require('path'); 
const PORT = process.env.PORT || 3000;
// const express = require('express')



const server = http.createServer(app);



server.listen(PORT,()=> console.log(`server Started on port ${PORT}`));