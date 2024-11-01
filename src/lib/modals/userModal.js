import { Provider } from "@radix-ui/react-tooltip";
import Password from "antd/es/input/Password";
import mongoose, { Schema } from "mongoose";

const {schema} = mongoose;

const userSchema = new Schema ({
    fullname : String,
    // Eamil ke baghair koi user nah asakta to ham yahee per hee type req kardega object banake is ka ek or faida jab tak email nahe atee documents db me add hee nahe kare ga
    email : {type : String , required : true},
    Provider : {type : String},
    profileImage : {type : String},
    Password : {type : String},
    role : {type : String , default : "user"},
},
{
    timestamps : true,
    // iska matlab ye han ke ke jab b user add hoga to mongo db usko create at or updated at automatically update   karega
}
)
  
export  const userModel = mongoose.models.user || mongoose.model("user" ,userSchema)