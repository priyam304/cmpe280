
mongoose=require('mongoose');


const patientSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstName:String,
    lastName:String,
    gender:String,
    age:String,
    notes:String,
    height:String,
    weight:String,
    bodyTemp:String,
    pulseRate:String,
    bp:String,
    medication:String,
    notes:String
});


module.exports=mongoose.model('Patient',patientSchema);