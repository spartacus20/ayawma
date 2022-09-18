import React from 'react'
import GooglePlay from '../../Images/GooglePlay.png'
import AppleStore from '../../Images/AppleStore.png'
function Footer() {
    return (
        <footer className='
            w-[100%] 
            2xl:h-[300px]
            mt-[05]
            bg-black
            
            '>

            <div className="flex justify-between mx-auto  mt-[50px]
                sm:ml-[50px]
            ">
                {/* PARTE DE ARRIBA */}
                <div className="
                 2xl:ml-[300px] 
                 xl:ml-[300px]
                 lg:ml-[300px]
                 md:mx-auto
                 sm:mx-auto
                 grid grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-5">
                    <div className='
                      2xl:mr-[100px]
                      xl:mr-[100px]
                      lg:mr-[100px]
                      sm:mr-[0px]
                      border-2
                      border-red-100
                      
                    '>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Application</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <img src={GooglePlay} alt="" />
                            </li>
                            <li>
                                <img src={AppleStore} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className='
                     2xl:mr-[100px]
                     xl:mr-[100px]
                     lg:mr-[100px]
                     sm:mr-[25%] 
                    '>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                            </li>
                        </ul>
                    </div>
                    <div className='
                         2xl:mr-[100px]
                         xl:mr-[100px]
                         lg:mr-[100px]
                         sm:mr-[25%] 
                    
                    '>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className='
                         2xl:mr-[100px]
                         xl:mr-[100px]
                         lg:mr-[100px]
                         
                         sm:ml-[40%] 
                      
                    
                    '>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* PARTE DE ABAJO */}
            <div className=' w-[100%] h-[15%] mt-[45px] flex' >
                <div className='w-[40%]  flex items-center'>
                    <span className='
                    font-bold text-white 
                        ml-[60%]
                    
                    '>AYAWMA</span>
                </div>
                <div className='w-[40%]  flex items-center'>
                    <span className='font-bold text-white ml-[60%]'>© 2022 All Rights Reserved</span>
                </div>
            </div>



        </footer>
    )
}

export default Footer