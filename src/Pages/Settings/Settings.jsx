import React, { useState } from 'react'
import { axios } from 'axios'
import { BsPencilFill } from "react-icons/bs"
import LateralTable from './LateralTable'
import EmailModal from './Modals/EmailModal';
import NameModal from './Modals/NameModal'
import PasswordModal from './Modals/PasswordModal';

// import PasswordModal from './Modals/NameModal'

function Settings() {

    const [passwordModal, setPasswordModal] = useState(false)
    const [emailModal, setEmailModal] = useState(false);
    const [nameModal, setNameModal] = useState(false);
    const toggleNameModal = () => setNameModal(!nameModal)
    const toggleEmailModal = () => setEmailModal(!emailModal)
    const togglePasswordModal = () => setPasswordModal(!passwordModal)

    const handleClick =  async () => {
        const response = await axios.post("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")

        console.log(response)

    }

    return (

        <>

            <NameModal nameModal={nameModal} toggleModal={toggleNameModal}/>  
            <EmailModal emailModal={emailModal} toggleModal={toggleEmailModal}/>
            <PasswordModal passwordModal={passwordModal} toggleModal={togglePasswordModal} />
            <div className='flex sm:flex-col xl:flex-row'>

                <LateralTable />
                <div className='xl:mt-[150px] xl:w-[80%] mx-auto xl:px-20  sm:w-[100%] sm:px-5 sm:mt-[50px]'>
                    <h1 className='mb-12 font-semibold text-2xl'>Settings</h1>
                    <div>
                        <div className='mb-8 flex items-center jus'>
                            <span>Account name</span>
                            <div className='mx-auto flex items-center justify-center'>
                                <span className='mr-3'>Admin </span>
                                <div className='flex items-center border-2 border-black rounded-lg px-5 h-[38px] w-[89px] cursor-pointer' onClick={toggleNameModal}>
                                    <BsPencilFill />
                                    <span className='ml-2'>Edit</span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-8 flex items-center '>
                            <span className='mr-16'>Email</span>
                            <div className='mx-auto flex items-center w-[200px]'>
                                <span className='mr-3'>test@example.com</span>
                                <div className='flex items-center border-2 border-black rounded-lg px-5 h-[38px] w-[89px] cursor-pointer' onClick={toggleEmailModal}>
                                    <BsPencilFill />
                                    <span className='ml-2'>Edit</span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-8 flex items-center'>
                            <span className='mr-16'>Password</span>
                            <div className='mx-auto flex items-center w-[200px]'>
                                <div className='flex items-center border-2 border-black rounded-lg px-4 h-[38px] w-[120px] cursor-pointer' onClick={togglePasswordModal}>
                                    <BsPencilFill size={10} />
                                    <span className='ml-2'>Change</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick} className=' h-[40px] px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mb-7'>Save change</button>

                    </div>


                </div>
            </div>
        </>



    )
}

export default Settings