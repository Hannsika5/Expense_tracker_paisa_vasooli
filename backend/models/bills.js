import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
    title:{
       type:String,
    },
    amount:{
        type:Number,
    },
    currency:{
        type:String,
    },
    toWhom:{
        type:String,
        
    },
    recurring:{
        type:String,
    },
    dueDate:{
        type:Date,
    }
},{timestamps: true})

// daily weekly 
// curr date  , date when last email was sent / the date when the bill was made

export default mongoose.model("Bill",billSchema)