import React from 'react'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import Toggle from './toggle'

export default function Roles() {
    return (
         <main className="flex-1 relative overflow-y-auto focus:outline-none">
             <div className="py-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-2">
                 <div className='w-full'>
                     <div className='flex justify-between'>
                        <h6 className='ml-10'>Staff roles and permission</h6>
                        <div className='flex'>
                           <button type="button" className="inline-flex items-center px-4 py-2 mb-4 mr-10 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            + Add New Role
                            </button>
                        </div>
                    
                    </div>
                    <div className="flex justify-around">
                       <div class="bg-white w-96 shadow overflow-hidden sm:rounded-md">
                           <ul class="divide-y divide-gray-200">
                               <li>
                                   <div className="block bg-gray-50">
                                       <div className="flex items-center px-2 py-2 sm:px-6">
                                           <div class="min-w-0 flex-1 flex justify-between items-center">
                                               <h6>App Admin Roles</h6>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                               <li>
                                   <div className="block hover:bg-gray-50">
                                       <div className="flex items-center px-4 py-4 sm:px-6">
                                           <div class="min-w-0 flex-1 flex justify-between items-center">
                                               <h6>Admin</h6>
                                               <div className='flex justify-around w-24'>
                                                  <EditOutlined /> 
                                                  <DeleteOutlined />
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                               <li>
                                   <div className="block hover:bg-gray-50">
                                       <div className="flex items-center px-4 py-4 sm:px-6">
                                           <div class="min-w-0 flex-1 flex justify-between items-center">
                                               <h6>Super Admin</h6>
                                               <div className='flex justify-around w-24'>
                                                  <EditOutlined /> 
                                                  <DeleteOutlined />
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                                <li>
                                   <div className="block hover:bg-gray-50">
                                       <div className="flex items-center px-4 py-4 sm:px-6">
                                           <div class="min-w-0 flex-1 flex justify-between items-center">
                                               <h6>Manager</h6>
                                               <div className='flex justify-around w-24'>
                                                  <EditOutlined /> 
                                                  <DeleteOutlined />
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                                <li>
                                   <div className="block hover:bg-gray-50">
                                       <div className="flex items-center px-4 py-4 sm:px-6">
                                           <div class="min-w-0 flex-1 flex justify-between items-center">
                                               <h6>Supervisor</h6>
                                               <div className='flex justify-around w-24'>
                                                  <EditOutlined /> 
                                                  <DeleteOutlined />
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                                <li>
                                   <div className="block hover:bg-gray-50">
                                       <div className="flex items-center px-4 py-4 sm:px-6">
                                           <div class="min-w-0 flex-1 flex justify-between items-center">
                                               <h6>Project Manager</h6>
                                               <div className='flex justify-around w-24'>
                                                  <EditOutlined /> 
                                                  <DeleteOutlined />
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                                <li>
                                   <div className="block hover:bg-gray-50">
                                       <div className="flex items-center px-4 py-4 sm:px-6">
                                           <div class="min-w-0 flex-1 flex justify-between items-center">
                                               <h6>Assistant Supervisor</h6>
                                               <div className='flex justify-around w-24'>
                                                  <EditOutlined /> 
                                                  <DeleteOutlined />
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                           </ul>
                       </div>
                       <div className='flex flex-col gap-4'>
                           <div class="bg-white w-96 shadow overflow-hidden sm:rounded-md">
                                <ul class="divide-y divide-gray-200">
                                    <li>
                                        <div className="block bg-gray-50">
                                            <div className="flex items-center px-2 py-2 sm:px-6">
                                                <div class="min-w-0 flex-1 flex justify-between items-center">
                                                    <h6>Permission</h6>
                                                    <h6>Action</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="block hover:bg-gray-50">
                                            <div className="flex items-center px-4 py-4 sm:px-6">
                                                <div class="min-w-0 flex-1 flex justify-between items-center">
                                                    <h6>View transaction page</h6>
                                                    <div className='flex justify-around w-24'>
                                                        <Toggle />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="block hover:bg-gray-50">
                                            <div className="flex items-center px-4 py-4 sm:px-6">
                                                <div class="min-w-0 flex-1 flex justify-between items-center">
                                                    <h6>View block investor</h6>
                                                    <div className='flex justify-around w-24'>
                                                        <Toggle />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                        <li>
                                        <div className="block hover:bg-gray-50">
                                            <div className="flex items-center px-4 py-4 sm:px-6">
                                                <div class="min-w-0 flex-1 flex justify-between items-center">
                                                    <h6>View inventory</h6>
                                                    <div className='flex justify-around w-24'>
                                                        <Toggle />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                        <li>
                                        <div className="block hover:bg-gray-50">
                                            <div className="flex items-center px-4 py-4 sm:px-6">
                                                <div class="min-w-0 flex-1 flex justify-between items-center">
                                                    <h6>Assign task to ranch hand</h6>
                                                    <div className='flex justify-around w-24'>
                                                        <Toggle />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                        <li>
                                        <div className="block hover:bg-gray-50">
                                            <div className="flex items-center px-4 py-4 sm:px-6">
                                                <div class="min-w-0 flex-1 flex justify-between items-center">
                                                    <h6>View transaction page</h6>
                                                    <div className='flex justify-around w-24'>
                                                        <Toggle />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className='flex ml-58 gap-4'>
                                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Cancel
                                    </button>
                                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Save
                                    </button>
                            </div>
                       </div>
                    </div>
                 </div>
             </div>
         </main>
    )
}