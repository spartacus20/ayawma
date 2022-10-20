import React from 'react'
import CardCategorie from '../../Components/CardCategorie/CardCategorie'
import Group from '../../Assets/Group.js'
import GameIcon from '../../Assets/GameIcon.js'
import Components from '../../Assets/Components'
import Smartphones from '../../Assets/Smartphones.js';
import Gadgets from '../../Assets/Gadgets'
import Cables from '../../Assets/Cables'
import Computers from '../../Assets/Computers'
import Acessories from '../../Assets/Acessories'
import TV from '../../Assets/TV'
import Router from '../../Assets/Router'


function Categories() {
    return (
        <div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden mb-10  items-center justify-center mt-[100px] h-[130px] '>
            <CardCategorie svg={<Group />} text="Foto & Video" color="#E3F5FF" />
            <CardCategorie svg={<GameIcon />} text="Gaming" color="#F1FFF2" />
            <CardCategorie svg={<Components />} text="Components" color="#D0E7D2" />
            <CardCategorie svg={<Smartphones />} text="Smartphones" color="#FFE0E0" />
            <CardCategorie svg={<Gadgets />} text="Gadgets" color="#F9E4D3" />
            <CardCategorie svg={<Cables />} text="Cables & adapters" color="#FBF2F4" />
            <CardCategorie svg={<Computers />} text="Computers" color="#F8F1FF" />
            <CardCategorie svg={<Acessories />} text="Acessories" color="#E3F5FF" />
            <CardCategorie svg={<TV />} text="TV" color="#FFFAF5" />
            <CardCategorie svg={<Router />} text="Router" color="#F8F1FF" />


        </div>
    )
}

export default Categories