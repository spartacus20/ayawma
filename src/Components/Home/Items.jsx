import React, { useState} from 'react'
import MostPopular from './MostPopular'
import MostTrending from './MostTrending'

function Items() {
    const [Items, setItems] = useState(false);
    const toggleItems = () => setItems(!Items); 
    
    
    
    return (
        <div className='w-[100%] 2xl:h-[600px] xl:h-[850px] lg:h-[850px] md:h-[850px] sm:h-[850px] bg-[#F2F2F2] 2xl:mt-[200px] xl:mt-[200px] lg:mt-[200px] md:mt-[50px] sm:mt-[50px]'>
            <div className='w-[100%] h-[50px]  mt-[50px] flex'>
                <div className={` ${Items ? '' : 'border-b-[3px] border-[orange]'}  h-[100%]  lg:ml-[290px] 2xl:ml-[290px]  xl:ml-[290px] md:ml-[290px] sm:ml-[0px] flex items-center 2xl:w-[20%] xl:w-[20%] lg:w-[20%] md:w-[50%] sm:w-[50%]`}
                    onClick={toggleItems}
                >
                    <span className={` ${Items ? 'text-[#B3B3B3]' : ' font-semibold'} mx-auto `} >Most popular items</span>
                </div>
                <div className={` ${!Items ? '' : 'border-b-[3px] border-[orange]'} h-[100%]  lg:ml-[290px] 2xl:ml-[0px]  xl:ml-[0px] md:ml-[290px] sm:ml-[0px] flex items-center 2xl:w-[20%] xl:w-[20%] lg:w-[20%] md:w-[50%] sm:w-[50%] `}
                    onClick={toggleItems}
                >
                    <span className={` ${!Items ? 'text-[#B3B3B3]' : 'font-semibold'} mx-auto `} >Most trending items</span>
                </div>
            </div>
            <MostPopular visible={!Items} />
            <MostTrending visible={Items} />

        </div>
    )
}

export default Items