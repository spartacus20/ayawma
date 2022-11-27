import React, { lazy, Suspense } from 'react'
// import Card from '../../Components/Card/Card';
// Images

import ps4 from '../../Images/HOME/controller-ps4.png'
import powerbank from '../../Images/HOME/hippo-powerbank.png'
import asus from '../../Images/HOME/asus-notebook.png'
import SamsungA03 from '../../Images/HOME/samsung-a03.png'
import SamsungTV from '../../Images/HOME/samsung-32-tv.png'
import LGmouse from '../../Images/HOME/lg-mouse.png'
import AcerAll from '../../Images/HOME/acer-all-in-one.png'
import TPLink from '../../Images/HOME/tp-link-router.png'
import LazyCard from '../Lazy/LazyCard';

const Card = lazy(() => import("../Card/Card"))

function SomeItems() {
  return (
    <div className='Container-2 Spacer-2'>
      <Suspense fallback={<LazyCard />}>
        <Card text="PS4 OP Stick Bonus USB Charge Cable White" img={ps4} price="27.87" />
        <Card text="Hippo Ilo W2 Powerbank wireless 10000mah" img={powerbank} price="32.50" />
        <Card text="ASUS ExpertBook B1400CEAE-EK3424T" img={asus} price="527.66" />
        <Card text="SAMSUNG Galaxy A03" img={SamsungA03} price="118.60" />
        <Card text="SAMSUNG 32 Inch TV LED UA32T4003" img={SamsungTV} price="188.55" />
        <Card text="LOGITECH Pop Mouse" img={LGmouse} price="24.29" />
        <Card text="ACER All-In-One Aspire C24-1650 (Core i3-1115G4, 4GB, 1TB HDD, Win 11 Home)" img={AcerAll} price="577.20" />
        <Card text="TP-LINK Archer AX73 Router" img={TPLink} price="116.61" />
      </Suspense>

    </div>
  )
}

export default SomeItems
