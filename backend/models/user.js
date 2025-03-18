import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    stocks:{
        type:[Object],
    },
    files:{
        type:[Object],
    },
    groups:{
        type:[String], 
        // group ids  userid-> groups->[adfa,adfadsf,asdfasdfasd,asdfasdf]
    },
    friends:{
        type:[String]
        // [asdfa,asdfas,asdfasdf] ids
    },
    sentRequests:{
        type:[String]
    },
    receivedRequests:{
        type:[String]
    },
    inbox:{
        type:[String]   

        // array of ids -> diff users who gave friend request
   },
    image:{
        type: String,
        default:null
        // img will be uploaded to cloud ( cloudinery )
        // photos u directly upload to database ( disadv ? => It will occupy space )-> how to optimise ?
        // Upload photo / files to cloud 
        // cloud ?
        // cloud is third party service ( it does the above job ) in return what will it give to the website ?
        // url -> to load photos etc on my website
    },
    badges:{
        type:[String]
    },
    token:{
        type:String
    }
})

export default mongoose.model("User",userSchema)