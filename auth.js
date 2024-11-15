import { connectDB } from "@/lib/dbConnect"
import UserModel from "@/lib/modals/userModal"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"



const handleLoginUser = async (profile) => {

  await connectDB()

  const user = await UserModel.findOne({ email: profile.email });
  if (user) {
    return user
    // ager user Han to masla han hee nahe han user hee return kardo 
    // ager user nahe hoo  to ham ne obj banaya han acc to our schema or usko db me store karadia
  } else {
    const obj = {
      fullname: profile.name,
      email: profile.email,
      Provider: "google",
      profileImage: profile.picture,
    }
    let newUser = new UserModel(obj);

    newUser = await newUser.save();

    return newUser;
  }
  // Ye ham islia karahe han take data hamare mongodb me save hojaye or age hamne koi transactions karne hogee wo hamare mondo db se hoga bad me mobile ap me b fetch karne me asane hoo


}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Credentials({
   
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null
        // const { email, password } = await signInSchema.parseAsync(credentials)
        console.log("credentials =>" , credentials)
 
       
        return user
      },
    async authorize({ request }) {
      const response = await fetch(request)
      if (!response.ok) return null
      return (await response.json()) ?? null
    },
  }),],
  callbacks: {
    async signIn({ account, profile }) {
      const user = await handleLoginUser(profile)
      // if (account.provider === "google") {
      //   return profile.email_verified && profile.email.endsWith("@example.com")
      // }

      console.log("account => ", account)
      console.log("profile =>", profile)
      return { ...profile, role: user.role } // Do different verification for other providers that don't have `email_verified`
    },
    async jwt({ token }) {
      console.log("token => ", token)
      const  user = await  handleLoginUser(token)
      if (user) { // User is available during sign-in
      console.log("User In jwt =>", user)
      token.role = user.role
      token._id = user._id
      
      }
      return token
    },
    session({ session, token }) {
      session.user._id = token._id;
      session.user.role = token.role;

      console.log("token Console =>", token)

      return session
    },

  },
})