import React, {useEffect} from 'react'
import "./home.css"

import Navbar from '../../Components/Navbar/Navbar'
import Categories from '../../Components/HomeItems/Categories'
import SomeItems from '../../Components/HomeItems/SomeItems'
import HomeItems from '../../Components/HomeItems/Recomendation/Items';
import LatestProduct from '../../Components/HomeItems/Recomendation/LatestProduct'




function Home() {   
    

    useEffect(() => {
        document.title = "Ayawma.com"
        window.scrollTo(0,0)
    }, [])

    return (
        <div className='w-full min-h-[600] flex flex-col'>
            <Navbar User={false} Home={true}/>
            <Categories />
            <SomeItems />
            <HomeItems />    
            <LatestProduct /> 
        </div>

    )
}

export default Home