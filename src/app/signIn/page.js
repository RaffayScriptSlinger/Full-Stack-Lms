
import { signIn,auth } from "../../../auth"
 
export default async function SignIn() {
const session = await auth()
// console.log("session => => ===================== ", session , "======================")
// console.log("session Image == ..>" , session.user.image)
let imageAddress;
if(session){
    imageAddress = session.user.image;
}
else{
    imageAddress = "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
}
  return (
    <div className="container mx-auto border-2 border-gray-500">
    <img src={imageAddress} className="w-3/5 h-56 rounded-lg"></img>
    
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
    </div>
  )
} 

