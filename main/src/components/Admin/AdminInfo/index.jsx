import React, { useState } from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'

export default function AdminInfo() {
    const [file, setFile] = useState('')
    const [imagePreviewUrl, setImagePreviewUrl] = useState('https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true')
    const [active, setActive] = useState('edit')
    
    const photoUpload = e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setFile(file)
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
    }
    
    return (
         <main className="flex-1 relative overflow-y-auto focus:outline-none">
             <div className="py-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-20">
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <ArrowLeftOutlined />
                        </div>
                        
                        <div className='mt-8'>
                            <form>
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                         <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                                        <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
                                        </div>
                                        
                                        <div className="col-span-3">
                                            <label className="block text-sm font-medium text-gray-700">
                                            Photo
                                            </label>
                                            <div className="mt-1 flex items-center">
                                            <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-20 w-20">
                                                <img className="h-full w-full text-gray-300" src={imagePreviewUrl} alt='profile-pic' />
                                            </span>
                                            <input onChange={photoUpload} type="file" class="ml-5 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label for="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                                                <input type="text" name="first_name" id="first_name" required autocomplete="given-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            </div>
                                            
                                            <div className="col-span-6 sm:col-span-3">
                                                <label for="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                                                <input type="text" name="last_name" required id="last_name" autocomplete="family-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            </div>
                                            
                                            <div className="col-span-6 sm:col-span-4">
                                                <label for="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                                                <input type="text" name="email_address" required id="email_address" autocomplete="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            </div>
                                            
                                            <div className="col-span-6 sm:col-span-3">
                                                <label for="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                                                <select id="country" name="country" autocomplete="country" className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>
                                            
                                            <div className="col-span-6">
                                                <label for="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                                                <input type="text" name="street_address" id="street_address" autocomplete="street-address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            </div>
                                            
                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                                                <input type="text" name="city" id="city" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            </div>
                                            
                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label for="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                                                <input type="text" name="state" id="state" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            </div>
                                            
                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label for="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                                                <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="w-full px-4 py-3 bg-gray-50  text-right sm:px-6">
                                        <button type="submit" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                 </div>
         </main>
    )
}