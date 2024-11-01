import { connectToMongoDB } from "@/lib/dbConnect";

export async function POST(request) {
    await connectToMongoDB();

    const obj = await request.json()
    console.log("obj => ",obj)
    return Response.json("user Post Request")



}
export async function GET() {
    return Response.json("user Get  Request")

}