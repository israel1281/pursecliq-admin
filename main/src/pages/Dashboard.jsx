import { Outlet, Link } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons'
import React from 'react'


export default function Dashboard()
{
    return (
        <div style={{minHeight: '640px'}} className="bg-gray-100">
             <div className="h-screen flex overflow-hidden bg-gray-100">
                 <div className="hidden md:flex md:flex-shrink-0">
                     <div className="flex flex-col w-64">
                         <div className="flex flex-col h-0 flex-1">
                            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                            </div> 
                            
                            <div className="flex-1 flex flex-col overflow-y-auto">
                                <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
                                    <a href="https://tailwindui.com/components/application-ui/application-shells/sidebar#" class="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg class="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                      Dashboard  
                                    </a>
                                    
                                    <a href="https://tailwindui.com/components/application-ui/application-shells/sidebar#" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg class="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>                                       
                                        Account
                                    </a>
                                    
                                    <a href="https://tailwindui.com/components/application-ui/application-shells/sidebar#" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg class="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                        Card
                                    </a>
                                    
                                    <a href="https://tailwindui.com/components/application-ui/application-shells/sidebar#" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                     <svg class="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>                                       
                                        Users
                                    </a>
                                    
                                    <a href="https://tailwindui.com/components/application-ui/application-shells/sidebar#" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                      <svg class="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>                                      
                                        Admin
                                    </a>
                                    
                                    <a href="https://tailwindui.com/components/application-ui/application-shells/sidebar#" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                     <svg class="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>                                       
                                        Team
                                    </a>
                                    
                                    <a href="https://tailwindui.com/components/application-ui/application-shells/sidebar#" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                     <svg class="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>                                       
                                        Team
                                    </a>
                                    
                                    <a href="https://tailwindui.com/components/application-ui/application-shells/sidebar#" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg class="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>                                        
                                        Team
                                    </a>
                                    
                                    <a href="https://tailwindui.com/components/application-ui/application-shells/sidebar#" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg class="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>                                        
                                        Team
                                    </a>
                                    
                                    <a href="https://tailwindui.com/components/application-ui/application-shells/sidebar#" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg class="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>                                        
                                        Team
                                    </a>
                                </nav>
                            </div>
                         </div>
                     </div>
                 </div>
                 
                 <div className="flex flex-col w-0 flex-1 overflow-hidden">
                     <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
                         <button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
                            </svg>
                        </button>
                        <div className="flex-1 px-4 flex justify-between">
                            <div className="flex-1 flex">
                                <h4 className='md:ml-0 mt-4'>Dashboard</h4>
                            </div>
                            
                            <div className="ml-4 flex items-center md:ml-6">
                                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                    </svg>
                                </button>
                                
                                <div className="ml-3 relative">
                                    <div>
                                        <button type="button" className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button">
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full" src="https://joeschmoe.io/api/v1/random" alt="" />
                                        </button>
                                    </div>
                                    
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" style={{display: "none"}}>
                  
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" >Your Profile</a>
                                    
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700">Settings</a>
                                    
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700">Sign out</a>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                     
                     <main className="flex-1 relative overflow-y-auto focus:outline-none">
                        <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="py-4">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                            </div>
                        </div>
                        </div> 
                     </main>
                 </div>
             </div>
        </div>
    )
}