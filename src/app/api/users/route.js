import { connectDB } from "@/lib/dbConnect";
import UserModel from "@/lib/modals/userModal";
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";




export async function POST(request) {
    await connectDB();

    const obj = await request.json()


    // console.log("obj => ", obj)



    // Check karte han ka user Exist be karta han ya nahe ager nahe to usko error yahee show karwado


    const user = await UserModel.findOne({ email: obj.email })

     if (user){
        return Response.json(
            {
                error: true, msg: "Email already exists"
               
            },
            { status: 403 }
        );
        
        
    }

    const saltRounds = 10;
    const hashedPassword = await  bcrypt.hash(obj.Password, saltRounds);
    obj.Password = hashedPassword;
    // console.log(hashedPassword);
    // console.log(obj.Password);
 
    console.log("hashed Password => " , obj.Password)
    console.log(obj)



  


// Yaha hum is obj ko db me add karaha han  


    let newUser =  new UserModel({...obj})
    newUser = await newUser.save()



    
   
  
const token = jwt.sign({ 
    id : newUser._id , role : newUser.role
 }, process.env.JWT);

 return Response.json(
    {
        error : false,
        msg : "User created successfully",
        user: newUser,
        token,
    }
 )




    // console.log("User =>", User)
    // return Response.json({
    //     // "fullname" : "Raffay Sharjeel",
    //     // "email" : "raffaysharjeel@gmail.com",
    //     // "role" : "admin"
    //     fullname :  "Raffay Sharjeel",
    //     email : "raffaysharjeel@gmail.com",
    //     role : "admin"
    // })

}
export async function GET() {
    await connectDB()
    return Response.json("user Get  Request")

}




