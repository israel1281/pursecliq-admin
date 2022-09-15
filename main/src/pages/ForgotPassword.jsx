import React,{ useState, useEffect } from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Logo from '../purseblue.png'
import { useNavigate } from 'react-router-dom'
import { forgotPassword } from '../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons'

export default function ForgotPassword() 
{
    const initialState = { email: '', code: ''};
    const [userData, setUserData] = useState(initialState);
    const { email, code } = userData;
    
    const { auth, alert } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(auth.token) navigate('/dashboard')
    }, [auth.token, navigate])
    
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(forgotPassword(userData))
    }
    
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
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email address
                            </label>
                            <div className="mt-1">
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                autoComplete="email" 
                                required
                                value={email}
                                onChange={handleChangeInput}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                            </div>
                        </div>
                        
                        <div>
                            <button 
                                type="submit" 
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                disabled={email ? false : true}
                            >
                                {
                                    alert.loading ? 
                                    <span className='flex gap-2'>
                                        <LoadingOutlined />
                                        Submitting...
                                    </span>
                                    : 'Submit'
                                }
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