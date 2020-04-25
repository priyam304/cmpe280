const express= require('express');
const app= express();

const scapeDataRoutes= require('./api/routes/scapeData');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');

    if(req.method==='OPTIONS'){
        req.header('Access-Control-Allow-Methods','*');
        return res.status(200).json({});
    }

    next();
});


app.use('/scrape',scapeDataRoutes);


mongoose.connect('mongodb+srv://user:password@health-spa-olu2t.mongodb.net/test?retryWrites=true&w=majority');
app.use((req,res,next)=>{
    res.status(200).json({
        message:"It works!"
    });
});

module.exports=app;