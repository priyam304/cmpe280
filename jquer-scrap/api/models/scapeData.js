
mongoose=require('mongoose');


const scrapeSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Confirmed: String,
    recovered: String,
    Date: String
});


module.exports=mongoose.model('Scrape',scrapeSchema);