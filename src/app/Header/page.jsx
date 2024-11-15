"use Client"

import Link from "next/link"
import { auth, signOut } from "../../../auth"
import { Button } from "@/components/ui/button"
import Hero from "@/components/pages/Hero"




export default async function Header () {
    const session = await  auth()
    console.log(session)
    return (

        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                   
                    
                     <img src="https://images.unsplash.com/photo-1620632523414-054c7bea12ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZ298ZW58MHx8MHx8fDA%3D" className="w-10 h-10 rounded-full" alt="" />
                        <span className="ml-3 text-xl">LMS</span>
                    
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center sm:hidden md:block">
                    <a className="mr-5 hover:text-gray-900">Home</a>
                        <a className="mr-5 hover:text-gray-900">About Us</a>
                        <a className="mr-5 hover:text-gray-900">Courses</a>
                        <a className="mr-5 hover:text-gray-900"> Contact us</a>
                    </nav>
                    {  session 
                    ? 
                    <>
                    {session.user.image ?
                    <img src={session.user.image} className="w-10 rounded-full m-2"></img>:
                    <img src ="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" className="w-10  rounded-full m-2"></img>
} 
                    <form
                    action={async () => {
                      "use server"
                      await signOut("google")
                    }}
                  >
                    <Button type="submit">Sign Out</Button>
                  </form>
                  </>
                    
                    :
                    <Link href="/signIn">
                     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Log In
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                    </Link>
                     }

                     {/* For Mobile */}

                     <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                     </ul>
                    
                </div>
            </header>
            <Hero />

        </div>
    )
}