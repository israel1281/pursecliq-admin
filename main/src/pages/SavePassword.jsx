import React, { useState, useEffect } from 'react';
import Logo from '../purseblue.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { resetPassword } from '../redux/actions/authAction';

export default function SavePassword() 
{
    const initialState = { 
        email: '', 
        password: ''
    };
        
    const [userData, setUserData] = useState(initialState);
    const { email, password } = userData;
    
    const { auth, alert } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }
    
    useEffect(() => {
        if(auth.token) navigate('/dashboard')
    }, [auth.token, navigate])
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPassword(userData))
        .then(() => {
            if(alert.success) navigate('/');
        })
    };
    
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Save password
                </h2>
            </div>
            
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-slate-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Email
                            </label>
                            <div className="mt-1">
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                autoComplete="email"
                                value={email} 
                                onChange={handleChangeInput}
                                required 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">
                                New password
                            </label>
                            <div className="mt-1">
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={handleChangeInput}
                                    required 
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                />
                            </div>
                        </div>
                        
                        <div>
                            <button 
                                type="submit" 
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                disabled={email && password ? false : true}
                            >
                                {
                                    alert.loading ? 
                                    <span className='flex gap-2'>
                                        <LoadingOutlined />
                                        Saving...
                                    </span>
                                    : 'Save'
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}