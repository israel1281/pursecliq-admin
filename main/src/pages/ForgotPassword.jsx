import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Logo from '../purseblue.png'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() 
{
    
    const navigate = useNavigate()
    
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Forgot password
                </h2>
            </div>
            
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-slate-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                        <div>
                            <label for="email" className="block text-sm font-medium text-white">
                            Email address
                            </label>
                            <div className="mt-1">
                            <input id="email" name="email" type="email" autocomplete="email" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        
                        <div>
                            <button onClick={() => navigate('/reset-password')} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            <div onClick={() => navigate('/')} className=" mt-6 cursor-pointer sm:mx-auto sm:w-full sm:max-w-md">
                <ArrowLeftOutlined className="sm:mx-auto text-white sm:w-full sm:max-w-md" />
                <h2 className="mt-1 text-center text-1xl text-white">
                    Go back
                </h2>
            </div>
        </div>
    )
}