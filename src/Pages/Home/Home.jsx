import React from 'react'
import "./home.css"
import Navbar from "../../Components/Navbar/Navbar1"
import Oportunities from '../../Components/Oportunities/Oportunities';
import Carrousel from '../../Components/Carrousel/Carrousel';



function Home() {






  return (
    <div className="HOME">
      <Navbar />
      <Carrousel />
      <Oportunities/>

      






    </div>
  )
}

export default Home