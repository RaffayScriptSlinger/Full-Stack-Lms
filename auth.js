import { connectDB } from "@/lib/dbConnect"
import UserModel from "@/lib/modals/userModal"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"


const handleLoginUser = async (profile) => {

  await connectDB()

  const user = await UserModel.findOne({ email: profile.email });
  if (user) {
    return user
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
  providers: [Google],
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
  },
})