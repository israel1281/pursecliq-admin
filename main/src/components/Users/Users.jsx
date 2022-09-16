import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import SelectTransactions from '../main/SelectTransactions';
import { getUsers } from '../../redux/actions/usersAction';
import { useDispatch, useSelector } from 'react-redux';


export default function Users() {
    
    const dispatch = useDispatch();
     const { auth, users } = useSelector(state => state);
     
    
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    
    return (
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
                 <Tab.Group>
                    <Tab.List className='flex justify-between -ml-5'>
                        <div className='flex'>
                            <Tab className='relative rounded-lg w-40 ml-5 text-gray-900  border border-gray-700 bg-gray-300 px-3 py-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                                Active Users
                            </Tab>
                            <Tab className='relative rounded-lg w-40 ml-5 text-gray-900  border border-gray-700 bg-gray-300 px-3 py-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                                Inactive Users
                            </Tab>
                        </div>
                        <div className='flex justify-between'>
                            <SelectTransactions />
                            <SelectTransactions />
                        </div>
                    </Tab.List>
                    <Tab.Panels className='mt-5'>
                        <Tab.Panel>
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-2">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-slate-700">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            First Name
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Last Name
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Cliq Id
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Email
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Phone
                                                        </th>
                                                        <th scope="col" className="relative px-6 py-3">
                                                        <span className="sr-only">View Details</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                    {
                                                        users.data
                                                        .filter(user => user.status.title === "active")
                                                        .map((user, index) => {
                                                            return (
                                                                 <tbody className="bg-slate-300 divide-y divide-gray-200">
                                                    <tr key={index}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                             <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full" src={user.avatar_url} alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {user.first_name}
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{user.last_name}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                1234567890
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                           {user.email}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            {user.phone}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <a href={`user/${user.id}`} class="text-indigo-600 hover:text-indigo-900">View Details</a>
                                                        </td>
                                                        </tr>
                                                </tbody>
                                                            )
                                                        })
                                                    }
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                             <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-2">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-slate-700">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            First Name
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Last Name
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Cliq Id
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Email
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Phone
                                                        </th>
                                                        <th scope="col" className="relative px-6 py-3">
                                                        <span className="sr-only">View Details</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                {
                                                    users.data
                                                    .filter(user => user.status.title === "pending")
                                                    .map((user, index) => {
                                                        return (
                                                            <tbody className="bg-slate-300 divide-y divide-gray-200">
                                                    <tr key={index}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                             <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full" src={user.avatar_url} alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {user.first_name}
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{user.last_name}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                1234567890
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            {user.email}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            {user.phone}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <a href="https://tailwindui.com/components/application-ui/lists/tables#" class="text-indigo-600 hover:text-indigo-900">View Details</a>
                                                        </td>
                                                        </tr>
                                                </tbody>
                                                        )
                                                    })
                                                }
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </main>
    )
}