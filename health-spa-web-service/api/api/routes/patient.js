const express= require('express');
const router= express.Router();

const Patient= require('../models/patient');





    router.get("/:patientId",(req,res,next)=>{

        const id=req.params.patientId;
        Patient.findById(id)
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


    router.patch("/:patientId",(req,res,next)=>{

        const id=req.params.patientId;
        
        
        Patient.update({_id:id} ,{$set:{medication:req.body.medication, comments:req.body.notes}})
        .exec()
        .then(result=>{
            
            res.status(200).json(result);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({error:err});
        });

    });


    router.delete("/:patientId",(req,res,next)=>{

        const id=req.params.patientId;
        Patient.remove({_id:id} )
        .exec()
        .then(doc=>{
            
            res.status(200).json(doc);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({error:err});
        });

    });

    router.get("/",(req,res,next)=>{

        
        Patient.find()
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

    const patient= new Patient({
        _id: new mongoose.Types.ObjectId(),
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        gender:req.body.gender,
        age:req.body.age,
        notes:req.body.notes,
        height:req.body.height,
        weight:req.body.weight,
        bodyTemp:req.body.bodyTemp,
        pulseRate:req.body.pulseRate,
        bp:req.body.bp,
        medication:req.body.medication,
    });

    patient.save().then(result=>{
        console.log(result);
    }).catch(err =>console.log(err));
    res.status(200).json({
        message:"Patient post request",
        createdProduct:patient
    });
});

module.exports=router;