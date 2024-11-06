import { connectDB } from "@/lib/dbConnect";
import { userModel } from "@/lib/modals/userModal";

export async function POST(request) {
    await connectDB();

    const obj = await request.json()
    console.log("obj => ",obj)


    const user = await userModel.findOne({email : obj.email})
    console.log(user)
    return Response.json("user Post Request Hogaye han")

}
export async function GET() {
    return Response.json("user Get  Request")

}

