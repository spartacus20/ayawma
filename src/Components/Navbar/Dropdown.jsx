import React from 'react'

function Dropdown({ logOut }) {
    return (
        <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
        >
            <a
                href="#"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600
      sm:text-[12px] md:text-[14px]"
                role="menuitem"
            >
                <span className="flex flex-col">
                    <span>Orders</span>
                </span>
            </a>
            <hr />
            <a
                href="#"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600
      sm:text-[12px] md:text-[14px]
      "
                role="menuitem"
            >
                <span className="flex flex-col">
                    <span>Account Settings</span>
                </span>
            </a>
            <a
                href="#"
                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600
      sm:text-[12px] md:text-[14px]
      "
                role="menuitem"
            >
                <span className="flex flex-col" onClick={logOut}>
                    <span>Log out</span>
                </span>
            </a>
        </div>
    )
}

export default Dropdown