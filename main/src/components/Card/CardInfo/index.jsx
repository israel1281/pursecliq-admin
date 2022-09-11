import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'

export default function CardInfo() {
    return (
         <main className="flex-1 relative overflow-y-auto focus:outline-none">
             <div className="py-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-20">
                 <div className='w-full'>
                     <div className='flex justify-between'>
                        <ArrowLeftOutlined />
                    </div>
                    
                    <div className="flex justify-around">
                       <div class="bg-white w-full mt-6 shadow overflow-hidden sm:rounded-md">
                           <ul class="divide-y divide-gray-200">
                               <li>
                                   <div className="block bg-gray-50">
                                       <div className="flex items-center px-2 -py-2 sm:px-6">
                                           <div class="min-w-0 flex-1 flex justify-between items-center">
                                               <h6>Account Information</h6>
                                               <button type="button" className="inline-flex w-32 items-center px-4 py-2 mr-10 border border-transparent text-base font-medium rounded-md shadow-sm text-red-500 bg-white-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Block
                                                </button>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                               <li>
                                   <div className="block hover:bg-gray-50">
                                       <div className="flex items-center justify-between px-4 py-4 sm:px-6">
                                          <div>
                                              <h5>First Name</h5>
                                              <h6 className='text-sm text-gray-900'>Micheal</h6>
                                              <h5 className='mt-8'>Last Name</h5>
                                              <h6 className='text-sm text-gray-900'>Jones</h6>
                                          </div>
                                          <div>
                                              <h5>Email</h5>
                                              <h6 className='text-sm text-gray-900'>MichealJones@examples.com</h6>
                                              <h5 className='mt-8'>Cliq Id</h5>
                                              <h6 className='text-sm text-gray-900'>1234567890</h6>
                                          </div>
                                          <div>
                                              <h5>Date Issued</h5>
                                              <h6 className='text-sm text-gray-900'>22/08/2022</h6>
                                              <h5 className='mt-8'>Card Type</h5>
                                              <h6 className='text-sm text-gray-900'>Online Store</h6>
                                          </div>
                                          <div className='mr-20'>
                                              <h5>Bvn</h5>
                                              <h6 className='text-sm text-gray-900'>Yes</h6>
                                          </div>
                                       </div>
                                   </div>
                               </li>
                           </ul>
                       </div>
                    </div>
                 </div>
             </div>
         </main>
    )
}