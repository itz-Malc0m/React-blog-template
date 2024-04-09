import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import { Button, Label, TextInput } from "flowbite-react";

export default function SignUp(){
    return(
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">

            {/* Left Hand Div */}
            <div className="flex-1">
                <Link to="/" className="font-bold dark:text-white text-4xl">
                <img src={Logo} className="rounded mx-3 sm:h-9 bg-gradient-to-l from-cyan-900 via-cyan-600 to-cyan-800" alt="Logo" />
                    
                </Link>
                <p className="tet-sm mt-5">
                    This is a demo project. You can sign up with your email and password or with Google.
                </p>
            </div>
            {/* Right Hand Div */}
            <div className="flex-1">
                <form className="flex flex-col gap-4" >
                    <div>
                        <Label value="Username" />
                        <TextInput type="text" id="username" placeholder="Username..." className="w-full p-2 border-gray-300 rounded-lg dark:bg-gray" />
                    </div>
                    <div>
                        <Label value="Email" />
                        <TextInput type="text" id="email" placeholder="email@company.com" className="w-full p-2 border-gray-300 rounded-lg dark:bg-gray" />
                    </div>
                    <div>
                        <Label value="Password" />
                        <TextInput type="text" id="password" placeholder="******" className="w-full p-2 border-gray-300 rounded-lg dark:bg-gray" />
                    </div>
                    <Button type="submit" className="bg-gradient-to-l from-cyan-900 via-cyan-600 to-cyan-800 text-white" color='gray'>
                        Sign Up
                    </Button>
                </form>
                <div className="flex gap-2 text-sm mt-3">
                    <span>Have an account?</span>
                    <Link to="/sign-in" className="text-blue-500">
                        Sign In
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}