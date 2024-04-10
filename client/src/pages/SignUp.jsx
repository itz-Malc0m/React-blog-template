import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png';
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";


export default function SignUp(){
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState([null])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange = ((e) =>{
        console.log(e.target.value);
        setFormData({...formData,[e.target.id]: e.target.value.trim() })
    })
    // console.log(formData)

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password){
        return setErrorMessage('Please fill out all fields.')
    }
    try {
        setLoading(true);
        setErrorMessage(null)
        const res = await fetch('/api/auth/signup',{
            method: 'POST',
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify(formData),
        });
        const data = await res.json()
        if (data.success === false) {
            return setErrorMessage(data.message)
        }
        setLoading(false)
        if(res.ok){
            navigate('/sign-in')
        }
    } catch (error){
        setErrorMessage(error.message)
        setLoading(false)
    } 
   };
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
                <form className="flex flex-col gap-4" onSubmit={handleSubmit} >
                    <div>
                        <Label value="Username" />
                        <TextInput onChange={handleChange} type="text" id="username" placeholder="Username..." className="w-full p-2 border-gray-300 rounded-lg dark:bg-gray" />
                    </div>
                    <div>
                        <Label value="Email" />
                        <TextInput onChange={handleChange} type="email" id="email" placeholder="email@company.com" className="w-full p-2 border-gray-300 rounded-lg dark:bg-gray" />
                    </div>
                    <div>
                        <Label value="Password" />
                        <TextInput onChange={handleChange} type="password" id="password" placeholder="******" className="w-full p-2 border-gray-300 rounded-lg dark:bg-gray" />
                    </div>
                    <Button disabled={loading} type="submit" className="bg-gradient-to-l from-cyan-900 via-cyan-600 to-cyan-800 text-white" color='gray'>
                       {
                        loading ? (
                            <>
                            <Spinner size='sm' color='black'/>
                            <span className="pl-3">Loading...</span>
                            </>
                        ) : 'Sign Up'
                       }
                    </Button>
                </form>
                <div className="flex gap-2 text-sm mt-3">
                    <span>Have an account?</span>
                    <Link to="/sign-in" className="text-blue-500">
                        Sign In
                    </Link>
                </div>
                {
                    errorMessage && (
                        <Alert className="mt-4 danger" color='red'>
                            {errorMessage}
                        </Alert>
                    )
                }
            </div>
            </div>
        </div>
    )
}