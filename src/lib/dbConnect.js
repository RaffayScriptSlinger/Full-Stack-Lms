/* Is ke andar mongo db ka db connect kare Ga*/

import mongoose from "mongoose"

export async function  connectDB() {
    try{
        let connection
        if(connection?.connection?.readyState != 1){
            connection = await mongoose.connect(process.env.MONGODB_URL);
            console.log("''''''''''''''''''''''db Connect Hogaya'''''''''''''''''''''''''''''''''''");
        }   
    }
    catch (err){
        console.log("err =>" , err)
    }
}
