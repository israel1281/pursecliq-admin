import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Logo from '../purseblue.png'
import { useNavigate, Link } from 'react-router-dom'

export default function ResetPassword() 
{
    
    const navigate = useNavigate()
    
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Reset password
                </h2>
            </div>
            
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-slate-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                        <div className=" mt-6 sm:mx-auto sm:w-full sm:max-w-md">
                            <h5 className="mt-2 text-center text-1xl text-white">
                                A generated password has been sent to your email
                            </h5>
                            
                            <h5 className="mt-2 text-center text-1xl text-white">
                                Follow the instructions and login in to your account
                            </h5>
                        </div>
                        
                        <div>
                            <Link
                                to='#'
                                onClick={(e) => {
                                    window.location.href = "mailto:no-reply@example.com";
                                    e.preventDefault();
                                }}
                            >
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Go to email
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            
            <div onClick={() => navigate('/forgot-password')} className="cursor-pointer text-white mt-6 sm:mx-auto sm:w-full sm:max-w-md">
                <ArrowLeftOutlined className="sm:mx-auto sm:w-full sm:max-w-md" />
                <h2 className="mt-1 text-center text-1xl">
                    Go back
                </h2>
            </div>
        </div>
    )
}