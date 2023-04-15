import React from 'react'
import GooglePlay from '../../Images/GooglePlay.png'
import AppleStore from '../../Images/AppleStore.png'
import im1 from "./Mi proyecto2.png"
function Footer() {
    return (

        <footer className="bg-black dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 flex justify-center align-center">
                        <a href="/" className="flex items-center">
                            <img src={im1} className="h-8 mr-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Ayawma</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2  text-white">
    
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Company</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/about" className="hover:underline ">About us </a>
                                </li>
                                <li>
                                    <a href="/support" className="hover:underline">Support</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="terms" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://ayawma.com/" className="hover:underline">Ayawma™</a>. All Rights Reserved.
                    </span>
                   
                </div>
            </div>
        </footer>

    )
}

export default Footer