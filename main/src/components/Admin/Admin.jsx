import React from 'react'
import SelectTransactions from '../main/SelectTransactions'

export default function Admin() {
    return (
         <main className="flex-1 relative overflow-y-auto focus:outline-none">
             <div className="py-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-2">
                 <div className='w-full'>
                     <div className='flex justify-between'>
                        <h6 className='ml-10'>All Admin(50)</h6>
                        <div className='flex'>
                           <SelectTransactions /> 
                           <SelectTransactions />
                           <button type="button" className="inline-flex items-center px-4 py-2 mb-4 mr-10 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            + Add Admin
                            </button>
                        </div>
                    
                    </div>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-hidden sm:-mx-6 lg:-mx-2">
                             <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                 <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                       <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    First Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Last Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Phone
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Role
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Last Logged
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                   <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixqx=zbhrt3ZpS6&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    Micheal
                                                                </div>
                                                            </div>
                                                            </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">Jay</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        09080999999
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    Accounting
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    24/08/2022
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
         </main>
    )
}