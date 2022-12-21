const mongoose=require("mongoose");

const connectDatabase= () =>{
    // mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO_URI).then((data)=>{
        console.log(`mongoDB connected with server`)
    }).catch((err)=>{
    console.log(err)
    })
}

module.exports=connectDatabase;