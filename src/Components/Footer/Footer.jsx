import React from 'react'
import GooglePlay from '../../Images/GooglePlay.png'
import AppleStore from '../../Images/AppleStore.png'
function Footer() {
    return (
        <footer className='
            w-[100%] 
            2xl:h-[300px]
            
            bg-black
            
            '>

            <div class="flex justify-center mx-auto w-[100%] mt-[50px]">
                {/* PARTE DE ARRIBA */}
                <div class="ml-[300px]  grid grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-5">
                    <div className='mr-[100px]'>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Application</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4">
                                <img src={GooglePlay} alt="" />
                            </li>
                            <li>
                                <img src={AppleStore} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className='mr-[100px]'>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4">
                                <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                            </li>
                        </ul>
                    </div>
                    <div className='mr-[100px]'>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className='mr-[100px]'>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* PARTE DE ABAJO */}
            <div className='bg-red-100 w-[100%] h-[15%] mt-[45px]' >

            </div>



        </footer>
    )
}

export default Footer