import { connectDB } from "@/lib/dbConnect";
import UserModel from "@/lib/modals/userModal";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export async function POST(request) {
    await connectDB();

    const obj = await request.json()
    console.log(" Login obj => ", obj)

    // Check karte han ka user Exist be karta han ya nahe ager nahe to usko error yahee show karwado

    const user = await UserModel.findOne({ email: obj.email })
    

    


    if (!user) {
        return Response.json(
            {
                error: true,
                message: "User is not Exists"
            },
            {
                status: 404,
            }
        )
        

    }
    console.log(  "user password", user.Password )

    const isPasswordMatch = await bcrypt.compare(obj.Password, user.Password);
    console.log("isPasswordMatch =>",isPasswordMatch)

    if(!isPasswordMatch){
        return Response.json(
            {
                error: true,
                message: "Password is Not Valid"
            },
            {
                status: 404,
            }
        )

    }


    return Response.json("Working on Login")
}


