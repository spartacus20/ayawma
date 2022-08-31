import React from 'react'
import "./home.css"

import Navbar from '../../Components/Navbar/Navbar'
import Categories from '../../Components/Home/Categories'
import SomeItems from '../../Components/Home/SomeItems'
import HomeItems from '../../Components/Home/Items';
import LatestProduct from '../../Components/Home/LatestProduct'
import Footer from '../../Components/Footer/Footer'
function Home() {


    return (
        <div className='w-full  flex flex-col'>
            <Navbar />
            <Categories />
            <SomeItems />
            <HomeItems />
            <LatestProduct />
            <Footer />
        </div>

    )
}

export default Home