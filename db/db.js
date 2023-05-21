const mongoose = require('mongoose')

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true
        })
        console.log("DB connect successfully ");
    }
    catch(error)
    {
        console.log(error);
        process.exit(1);
    }
}
module.exports=connectDb;