import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import SelectTransactions from '../../main/SelectTransactions'
import { useParams } from 'react-router-dom';

export default function UserInfo() {
    return (
         <main className="flex-1 relative overflow-y-auto focus:outline-none">
             <div className="py-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-20">
                 <div className='w-full'>
                     <div className='flex justify-between'>
                        <ArrowLeftOutlined />
                        <div className='flex justify-between'>
                            <button type="button" className="inline-flex w-32 items-center px-4 py-2 mr-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-500 bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Block
                            </button>
                            <button type="button" className="inline-flex w-32 items-center px-4 py-2 mr-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-500 bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Block
                            </button>
                            <button type="button" className="inline-flex w-32 items-center px-4 py-2 mr-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-500 bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Block
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex justify-around">
                       <div class="bg-white w-full mt-6 shadow overflow-hidden sm:rounded-md">
                           <ul class="divide-y divide-gray-200">
                               <li>
                                   <div className="block bg-gray-50">
                                       <div className="flex items-center px-2 -py-2 sm:px-6">
                                           <div class="min-w-0 flex-1 flex justify-between items-center">
                                               <h6>Account Information</h6>
                                               
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
                                              <h5 className='mt-8'>Email</h5>
                                              <h6 className='text-sm text-gray-900'>MichealJones@examples.com</h6>
                                          </div>
                                          <div>
                                              <h5>Phone</h5>
                                              <h6 className='text-sm text-gray-900'>080833333333</h6>
                                              <h5 className='mt-8'>Cliq Id</h5>
                                              <h6 className='text-sm text-gray-900'>1234567890</h6>
                                              <h5 className='mt-8'>Bvn</h5>
                                              <h6 className='text-sm text-gray-900'>Verified</h6>
                                          </div>
                                          <div>
                                              <h5>Kyc 1</h5>
                                              <h6 className='text-sm text-gray-900'>Yes</h6>
                                              <h5 className='mt-8'>Date of birth</h5>
                                              <h6 className='text-sm text-gray-900'>22/08/2022</h6>
                                               <h5 className='mt-8'>Date Registered</h5>
                                              <h6 className='text-sm text-gray-900'>22/08/2022</h6>
                                          </div>
                                          <div className='mr-20'>
                                              <h5>Bvn</h5>
                                              <h6 className='text-sm text-gray-900'>Yes</h6>
                                            <img class="inline-block h-14 w-14 mt-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixqx=zbhrt3ZpS6&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />

                                          </div>
                                       </div>
                                   </div>
                               </li>
                           </ul>
                       </div>
                    </div>
                    
                      <div className='flex flex-wrap-reverse gap-4 mt-8'>
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            Transactions
                            <SelectTransactions />
                        </div>
                        <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                DATE
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                NAME
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                STATUS
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                AMOUNT
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                CURRENT BALANCE
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        1 jan 2022
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">Micheal Jay</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Successful
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    NGN 160,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    NGN 100,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="https://tailwindui.com/components/application-ui/lists/tables#" className="text-indigo-600 hover:text-indigo-900">View Details</a>
                                                </td>
                                            </tr>
                                            
                                             <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        1 jan 2022
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">Micheal Jay</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Successful
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    NGN 160,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    NGN 100,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="https://tailwindui.com/components/application-ui/lists/tables#" className="text-indigo-600 hover:text-indigo-900">View Details</a>
                                                </td>
                                            </tr>
                                            
                                             <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        1 jan 2022
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">Micheal Jay</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Successful
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    NGN 160,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    NGN 100,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="https://tailwindui.com/components/application-ui/lists/tables#" className="text-indigo-600 hover:text-indigo-900">View Details</a>
                                                </td>
                                            </tr>
                                            
                                             <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        1 jan 2022
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">Micheal Jay</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Successful
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    NGN 160,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    NGN 100,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="https://tailwindui.com/components/application-ui/lists/tables#" className="text-indigo-600 hover:text-indigo-900">View Details</a>
                                                </td>
                                            </tr>
                                            
                                             <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        1 jan 2022
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">Micheal Jay</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Successful
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    NGN 160,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    NGN 100,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="https://tailwindui.com/components/application-ui/lists/tables#" className="text-indigo-600 hover:text-indigo-900">View Details</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                 </div>
             </div>
         </main>
    )
}