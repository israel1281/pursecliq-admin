import React from 'react'
import { EditOutlined, DeleteOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import Toggle from '../../Roles/toggle'

export default function AdminDetails() {
    return (
         <main className="flex-1 relative overflow-y-auto focus:outline-none">
             <div className="py-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-2">
                 <div className='w-full'>
                     <div className='flex justify-between'>
                        <h6 className='ml-10'><ArrowLeftOutlined /></h6>
                        <div className='flex'>
                           <button type="button" className="inline-flex items-center px-4 py-2 mb-4 mr-10 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                               Edit
                            </button>
                            <button type="button" className="inline-flex items-center px-4 py-2 mb-4 mr-10 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Reset Password
                            </button>
                            <button type="button" className="inline-flex items-center px-4 py-2 mb-4 mr-10 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Delete
                            </button>
                            <button type="button" className="inline-flex items-center px-4 py-2 mb-4 mr-10 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Block
                            </button>
                        </div>
                    
                    </div>
                    <div className="flex justify-between">
                       <div class="bg-white flex flex-col gap-4 w-80 shadow px-2 py-4 overflow-hidden sm:rounded-md">
                           <h5>Admin</h5>
                           <div className="mt-1 gap-2 flex items-center">
                                <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-20 w-20">
                                    <img className="h-full w-full text-gray-300" src='https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true' alt='profile-pic' />
                                </span>
                                <div className='flex-col'>
                                    <h5>Name</h5>
                                    <h6>Richard Jones</h6>
                                </div>
                            </div>
                            <div className='flex-col'>
                                <h5>Email</h5>
                                <h6>RichardJones@gmail.com</h6>
                            </div>
                            <div className='flex-col'>
                                <h5>Phone</h5>
                                <h6>0803333333</h6>
                            </div>
                            <div className='flex-col'>
                                <h5>Role</h5>
                                <h6>Admin</h6>
                            </div>
                             <div className='flex-col'>
                                <h5>Address</h5>
                                <h6>16 akinola cole cresent ikeja</h6>
                            </div>
                       </div>
                       
                       <div class="bg-white w-80 shadow overflow-hidden sm:rounded-md">

                       </div>
                       
                       <div className='flex flex-col gap-4'>
                           <div class="bg-white w-80 shadow overflow-hidden sm:rounded-md">
 
                            </div>
                       </div>
                    </div>
                 </div>
             </div>
         </main>
    )
}