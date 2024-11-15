
// import mongoose, { Schema } from "mongoose";

// // const {Schema} = mongoose;

// const userSchema = new Schema ({
//     fullname : String,
//     // Eamil ke baghair koi user nah asakta to ham yahee per hee type req kardega object banake is ka ek or faida jab tak email nahe atee documents db me add hee nahe kare ga
//     email : {type : String , required : true},
//     Provider : {type : String},
//     profileImage : {type : String},
//     Password : {type : String},
//     role : {type : String , default : "user"},
// },
// {
//     timestamps : true,
//     // iska matlab ye han ke ke jab b user add hoga to mongo db usko create at or updated at automatically update   karega
// }
// )
  
// export  const UserModel = mongoose.models.Users || mongoose.model("User" ,userSchema)


import mongoose, { Schema } from "mongoose";

// Define the user schema
const userSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  Provider: { type: String },
  profileImage: { type: String },
  Password: { type: String },
  role: { type: String, default: "user" },
}, {
  timestamps: true,  // Automatically adds `createdAt` and `updatedAt` fields
});

// Avoid recompiling the model if it's already registered
const UserModel = mongoose?.models?.User || mongoose?.model("User", userSchema);

export default UserModel;  // Default export the model

