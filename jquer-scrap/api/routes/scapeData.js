const express= require('express');
const router= express.Router();

const Scrape= require('../models/Scrape');





    
    router.get("/",(req,res,next)=>{

        
        Scrape.find()
        .exec()
        .then(doc=>{
            console.log("From DB",doc);
            res.status(200).json(doc);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({error:err});
        });

    });

    router.post('/',(req,res,next)=>{

    const scraped= new Scrape({
        _id: new mongoose.Types.ObjectId(),
        Confirmed:req.body.Confirmed,
        recovered: req.body.recovered,
        Date: req.body.date

        
    });

    scraped.save().then(result=>{
        console.log(result);
    }).catch(err =>console.log(err));
    res.status(200).json({
        message:"Scrapped data stored",
        createdProduct:scraped
    });
});

module.exports=router;