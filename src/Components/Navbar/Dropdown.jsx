import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({ logOut, data }) {
    return (
        <>
            <div class="top-8 xl:left-20 sm:left-1 absolute h-3 w-3 origin-bottom-left rotate-45 transform  dark:bg-gray-700 dark:divide-gray-600"></div>
            <div id="dropdownInformation" class="absolute top-10 xl:left-0 sm:right-[-30px] z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">

                <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
                    <div>{data.name}</div>
                    <div class="font-medium truncate">{data.email}</div>
                </div>
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders</a>
                    </li>
                    <li>
                        <Link to="/settings">
                            <span class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">Settings</span>
                        </Link>
                    </li>

                </ul>
                <div class="py-1" onClick={logOut}>
                    <span href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</span>
                </div>
            </div>
        </>
    )
}

export default Dropdown