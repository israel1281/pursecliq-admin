import React, {useEffect} from 'react'
import SelectTransactions from './main/SelectTransactions'
import {
    FallOutlined,
    LineChartOutlined,
    PieChartFilled,
    AreaChartOutlined
} from '@ant-design/icons';
import { getMe } from '../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Main()
{
    
    const dispatch = useDispatch();
    const { auth, users } = useSelector(state => state);
    
    const token = sessionStorage.getItem("token")
    
    useEffect(() => {
        dispatch(getMe(token))
    }, [users])
    
    return (
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
                <div className='flex flex-wrap gap-1'>
                    <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex sm:flex-wrap w-9/12 gap-4">
                        <div className="relative w-64 rounded-lg border border-gray-700 bg-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                            <div className="flex-1 min-w-0">
                                <a href="https://tailwindui.com/components/application-ui/lists/grid-lists#" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    <p className="text-sm font-medium text-gray-900">
                                        350
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Total Users
                                    </p>
                                </a>
                            </div>
                            
                            <div className="flex-shrink-0">
                                <svg className="text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <path d="M26.3859 25.3295C29.091 22.4748 30.5675 18.6718 30.4976 14.7391C30.4278 10.8061 28.8169 7.05802 26.012 4.30125C23.207 1.54461 19.4324 0 15.5 0C11.5676 0 7.79321 1.54461 4.98796 4.30125C2.18319 7.05765 0.572225 10.8058 0.502369 14.7391C0.432537 18.6719 1.9091 22.4747 4.61413 25.3295C6.48768 27.3023 8.86198 28.7282 11.4834 29.4551C14.1045 30.1816 16.8739 30.1816 19.4951 29.4551C22.1164 28.7282 24.4908 27.3023 26.3643 25.3295C26.3643 25.3295 26.3858 25.3402 26.3858 25.3295H26.3859ZM15.5004 2.17779C18.6723 2.17157 21.7347 3.33862 24.0986 5.45455C26.4624 7.57048 27.9609 10.4859 28.306 13.6403C28.6511 16.7948 27.8184 19.9654 25.9683 22.5427C24.6103 19.9167 22.3159 17.8967 19.5398 16.8835C20.931 15.7641 21.7943 14.1163 21.923 12.3349C22.0517 10.5534 21.4339 8.7988 20.2176 7.49128C19.0015 6.18352 17.2966 5.44071 15.5113 5.44071C13.7258 5.44071 12.0209 6.18358 10.8048 7.49128C9.5887 8.7988 8.97096 10.5534 9.09959 12.3349C9.22802 14.1163 10.0913 15.764 11.4828 16.8835C8.70642 17.8967 6.41201 19.9167 5.05432 22.5427C3.20544 19.9674 2.37268 16.7995 2.7159 13.6477C3.05885 10.4956 4.55382 7.58126 6.91349 5.46435C9.27297 3.3475 12.331 2.17705 15.5007 2.17803L15.5004 2.17779ZM11.2147 11.8243C11.2147 10.6872 11.6663 9.59668 12.4701 8.7928C13.2736 7.98868 14.3637 7.53697 15.5004 7.53697C16.637 7.53697 17.7271 7.98868 18.5307 8.7928C19.3345 9.59668 19.786 10.6872 19.786 11.8243C19.786 12.9614 19.3345 14.052 18.5307 14.8558C17.7271 15.66 16.637 16.1117 15.5004 16.1117C14.3637 16.1117 13.2736 15.66 12.4701 14.8558C11.6663 14.052 11.2147 12.9614 11.2147 11.8243ZM6.57566 24.2791C7.54758 21.9019 9.42683 20.0108 11.7973 19.0244C14.1676 18.0382 16.8332 18.0382 19.2035 19.0244C21.574 20.0108 23.4533 21.9019 24.4252 24.2791C22.0289 26.5909 18.8295 27.8826 15.5007 27.8826C12.1718 27.8826 8.97243 26.5909 6.57615 24.2791H6.57566Z" fill="#fff" />
                                </svg>
                            </div>
                        </div>
                        
                        <div className="relative w-64 rounded-lg border border-gray-700 bg-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                            <div className="flex-1 min-w-0">
                                <a href="https://tailwindui.com/components/application-ui/lists/grid-lists#" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    <p className="text-sm font-medium text-gray-900">
                                        250
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Active Users
                                    </p>
                                </a>
                            </div>
                            
                            <div className="flex-shrink-0 text-green">
                                <LineChartOutlined className='text-green-800' />
                            </div>
                        </div>
                        
                        <div className="relative w-64 rounded-lg border border-gray-700 bg-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                            <div className="flex-1 min-w-0">
                                <a href="#" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    <p className="text-sm font-medium text-gray-900">
                                        100
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Inactive Users
                                    </p>
                                </a>
                            </div>
                            
                            <div className="flex-shrink-0">
                                <FallOutlined className='text-red-800' />
                            </div>
                        </div>
                        
                        <div className="relativ w-64 rounded-lg border border-gray-700 bg-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                            <div className="flex-1 min-w-0">
                                <a href="#" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    <p className="text-sm font-medium text-gray-900">
                                        NGN 1,000,000
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Total Savings
                                    </p>
                                </a>
                            </div>
                            
                            <div className="flex-shrink-0">
                                <AreaChartOutlined className='text-green-800' />
                            </div>
                        </div>
                        
                        <div className="relative w-64 rounded-lg border border-gray-700 bg-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                            <div className="flex-1 min-w-0">
                                <a href="#" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    <p className="text-sm font-medium text-gray-900">
                                        NGN 900,000
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Total Withdrawal
                                    </p>
                                </a>
                            </div>
                            
                            <div className="flex-shrink-0">
                                <FallOutlined className='text-red-800' />
                            </div>
                        </div>
                        
                        <div className="relative w-64 rounded-lg border border-gray-700 bg-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                            <div className="flex-1 min-w-0">
                                <a href="#" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    <p className="text-sm font-medium text-gray-900">
                                        NGN 800,000
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Total Transfer
                                    </p>
                                </a>
                            </div>
                            
                            <div className="flex-shrink-0">
                                <FallOutlined className='text-red-800' />
                            </div>
                        </div>
                        
                        <div className="relative w-64 rounded-lg border border-gray-700 bg-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                            <div className="flex-1 min-w-0">
                                <a href="#" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    <p className="text-sm font-medium text-gray-900">
                                        NGN 1,000,000
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Total Target Savings
                                    </p>
                                </a>
                            </div>
                            
                            <div className="flex-shrink-0">
                                <AreaChartOutlined className='text-green-800' />
                            </div>
                        </div>
                        
                        <div className="relative w-64 rounded-lg border border-gray-700 bg-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                            <div className="flex-1 min-w-0">
                                <a href="#" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    <p className="text-sm font-medium text-gray-900">
                                        NGN 900,000
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Total Flexi Savings
                                    </p>
                                </a>
                            </div>
                            
                            <div className="flex-shrink-0">
                                <AreaChartOutlined className='text-green-800' />
                            </div>
                        </div>
                        
                        <div className="relative w-64 rounded-lg border border-gray-700 bg-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                            <div className="flex-1 min-w-0">
                                <a href="#" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    <p className="text-sm font-medium text-gray-900">
                                        NGN 800,000
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Total Loans
                                    </p>
                                </a>
                            </div>
                            
                            <div className="flex-shrink-0">
                                <FallOutlined className='text-red-800' />
                            </div>
                        </div>
                    </div>
                    
                        <div className="relative rounded-lg w-48 ml-12  border border-gray-700 bg-gray-300 px-6 py-5 shadow-sm flex space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                            <div className="flex flex-col min-w-0">
                                <h4>Wallet</h4>
                                <div className="mt-6 text-sm font-medium text-gray-900">
                                   <p className="text-sm font-medium text-gray-900">
                                        NGN 2,500,000
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Current Balance
                                    </p>
                                </div>
                                <div className="mt-6 text-sm font-medium text-gray-900">
                                   <p className="text-sm font-medium text-gray-900">
                                        NGN 4,500,000
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Total Earnings
                                    </p>
                                </div>
                                <div className="mt-6 text-sm font-medium text-gray-900">
                                   <p className="text-sm font-medium text-gray-900">
                                        NGN 1,500,000
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        Total Expenditure
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='flex flex-wrap-reverse gap-4 mt-8'>
                    <div className='w-9/12'>
                        <div className='flex justify-between'>
                            <h6 className='text-white'>Transactions</h6>
                            <SelectTransactions />
                        </div>
                        <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-slate-700">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                DATE
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                NAME
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                STATUS
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                AMOUNT
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                CURRENT BALANCE
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-slate-300 divide-y divide-gray-200">
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
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    NGN 160,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    NGN 160,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    NGN 160,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    NGN 160,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    NGN 160,000
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                    
                    <div className='mt-3 text-white'>
                        Notifications
                        <div className="relative h-72 rounded-lg w-48 mt-2 gap-2  border border-gray-700 bg-gray-300 px-1 py-2 shadow-sm flex space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            
                            <div className="flex-1 min-w-0">
                                 <div className="max-w-xl px-6">
                                <div className="flow-root">
                                    <ul className="-mb-8">
                                        <li>
                                            <div className="relative pb-8">
                                                
                                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                                <div className="relative flex space-x-3">
                                                    <div className="min-w-0 flex-1 pt-1.5 flex items-center justify-between space-x-4">
                                                        <div className='animate-bounce'>
                                                            <span className="h-2 w-2 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                                                            <svg className="h-5 w-5 text-white" x-description="Heroicon name: solid/user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                                            </svg>
                                                            </span>
                                                        </div>
                                                        <div>
                                                        <p className="text-sm text-gray-500">Applied to <a href="https://tailwindui.com/components/application-ui/lists/feeds#" className="font-medium text-gray-900">Front End Developer</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                         <li>
                                            <div className="relative pb-8">
                                                
                                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                                <div className="relative flex space-x-3">
                                                    <div className="min-w-0 flex-1 pt-1.5 flex items-center justify-between space-x-4">
                                                        <div className='animate-bounce'>
                                                            <span className="h-2 w-2 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                                                            <svg className="h-5 w-5 text-white" x-description="Heroicon name: solid/user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                                            </svg>
                                                            </span>
                                                        </div>
                                                        <div>
                                                        <p className="text-sm text-gray-500">Applied to <a href="https://tailwindui.com/components/application-ui/lists/feeds#" className="font-medium text-gray-900">Front End Developer</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
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