
import { signIn, auth } from "../../../auth"
import { redirect } from "next/navigation"

export default async function SignIn() {
  const session = await auth()
  console.log("session => => ===================== ", session, "======================")
  if (session) {
    redirect("/")
  }
  return (

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            To enroll in our exciting courses and access exclusive content, please log in to your LMS account now!
          </h1>
          <p className="leading-relaxed mt-4">
            Please log in to access a world of knowledge and learning opportunities. Our platform offers a variety of courses designed to enhance your skills, expand your knowledge, and foster personal growth
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>

          <form
            action={async (formData) => {
              "use server"
              // const email = formData.get("email");
              // const password = formData.get("password")
              await signIn("credentials", formData, { redirect: false, })


            }}
          >

            <input className = "border p-2" required name="email">
            
            </input>
            <input className = "border p-2" required name="password">
            
            </input>
            <button type="submit">
              Login
            </button>
            {/* {console.log(formData)} */}

            {/* <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                // type="email"
                // id="email"
                name="email"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                password
              </label>
              <input
                // type="text"
                // id="password"
                name="password"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full" type="submit">
              Sign In
            </button> */}

          </form>


          <p className="flex justify-center text-center">Or</p>
          <form
            action={async () => {
              "use server"
              await signIn("google")
            }}
          >
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 w-full mt-2 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">
              Sign In with Google

            </button>
          </form >
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>








    //   ======================================================================= 
    // <div className="container mx-auto border-2 border-gray-500">
    // <img src={imageAddress} className="w-3/5 h-56 rounded-lg"></img>

    // <form
    //   action={async () => {
    //     "use server"
    //     await signIn("google")
    //   }}
    // >
    //   <button type="submit">Signin with Google</button>
    // </form>
    // </div>
  )
}

