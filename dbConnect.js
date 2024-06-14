const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path:path.join(__dirname,'./config/config.env')})


const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.CONNECT_DB)
        console.log('dbConnect Successfull');
    } catch (error) {
        console.log(error);
    }
}
module.exports = dbConnect