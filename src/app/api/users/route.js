import { connectDB } from "@/lib/dbConnect";
import UserModel from "@/lib/modals/userModal";

export async function POST(request) {
    await connectDB();

    const obj = await request.json()
    console.log("obj => ", obj)

    // Check karte han ka user Exist be karta han ya nahe ager nahe to usko error yahee show karwado


    // const user = await userModel.findOne({ email: obj.email })

    let newUser =  new UserModel({...obj})
    newUser = await newUser.save()


    
    // if (user){
    //     return Response.json(
    //         {
    //             error: true, msg: "Email already exists"
    //         },
    //         { status: 403 }
    //     );
    // }
    // const saltRonds = 10;
    // const hashedPassword = await bcrypt.hash(obj.password ,saltRonds)






    console.log("User =>", User)
    return Response.json("user Post Hogaya")

}
export async function GET() {
    return Response.json("user Get  Request")

}


