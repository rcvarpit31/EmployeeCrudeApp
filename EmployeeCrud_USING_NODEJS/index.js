const express = require('express');
const dbConnect = require('./config/db.config');
const bodyParser = require('body-parser');

const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const crudRouther = require('./routes/crudRouts');

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 app.use("/api/employee/",crudRouther);

//  app.use(notFound);
//  app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server is runing ${PORT} `);
})