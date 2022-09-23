import React from 'react'
import { useNavigate } from 'react-router-dom'
import StarsChecked from '../../Assets/StarsChecked.js'
import StarsNotChecked from '../../Assets/StarsNotChecked.js'
import im1 from '../../Images/image 1.png'



function Card({ text, stars }) {

    const navigate = useNavigate();
    var stars = stars;
    var link = "/"+text.replaceAll(" ", "-")

    const handleRedirect = () => {
        navigate(link)
    }



    return (


        <div className={`
            mb-[10px]
            pl-[10px]
            pr-[10px]
            ${stars ? ' 2xl:w-[17%]  2xl:h-[80%] 2xl:mr-[10px]  xl:w-[17%]  xl:h-[50%] xl:mr-[10px]  lg:w-[17%]  lg:h-[50%] lg:mr-[10px]  md:w-[40%]  md:h-[50%] md:mr-[10px] sm:w-[50%] sm:h-[60%] sm:mt-[10px] ' : '2xl:w-[15%]  2xl:h-[50%] 2xl:mr-[10px] 2xl:flex-[0_0_20%] xl:w-[15%]  xl:h-[50%] xl:mr-[10px] xl:flex-[0_0_20%] lg:w-[15%]  lg:h-[50%] lg:mr-[10px] lg:flex-[0_0_20%]  md:w-[40%]  md:h-[50%] md:mr-[10px] sm:w-[50%] sm:h-[60%] sm:mt-[10px]'}
    
        `}>
            {/* Parte de arriba */}
            <div className='w-[100%] 
        
            2xl:h-[70%]
            lg: h-[70%]
            xl:sm:h-[70%]
            md:h-[60%]
            sm:h-[60%] '>
                <img onClick={handleRedirect} src={im1} alt="" className={stars?  ' mt-[0px] h-[80%] w-[100%] 2xl:object-fill xl:object-fill lg:object-fill md:object-fill sm:object-fill':'cursor-pointer mt-[0px] h-[100%] w-[100%] 2xl:object-cover xl:object-fill lg:object-fill md:object-fill sm:object-cover'}/>
            </div>
            <div className={ stars? 'cursor-pointer w-[100%] h-[30%]  2xl:mt-[-50px] xl:mt-[-50px] lg:mt-[-50px] md:mt-[-50px] sm:mt-[-30px]':'w-[100%] h-[30%] '}>
                <div className='text-left w-[100%] h-[50%] '>
                    <span onClick={handleRedirect} className="cursor-pointer">{text}</span>
                </div>
              
              
               {/* PARTE DE ABAJO */}
                <div className={`
                 
                  ${stars ? 'w-[100%] h-[60%] mt-[0px] flex flex-col ' : 'w-[100%] h-[50%] flex items-center '}   
                   sm:mt-[10px]
                  
                `}>
                    <div className={`
                      sm:w-[50%] ml-[10px] 
                      2xl:w-[30%] xl:w-[30%]
                      ${stars ? 'h-[50%] 2xl:mt-[-20px] xl:mt-[-20px] lg:mt-[-20px] md:mt-[20px] sm:mt-[20px] sm:ml-[0px]':'h-[80%] 2xl:mt-[-20px] xl:mt-[-20px] lg:mt-[-20px] md:mt-[10px] sm:ml-[0px] sm:mt-[10px] '} 
                      border-2 border-black rounded-[50px] 
                      flex items-center justify-center `}>
                        <span className=" text-[#000032] font-bold">$25.87</span>
                    </div>
                    <div className={stars ? 'w-[100%] h-[40%] flex items-center ml-[10px] mt-[10px]  sm:ml-[0px]':'hidden' }>
                            <StarsChecked/>
                            <StarsChecked/>
                            <StarsChecked/>
                            <StarsChecked/>
                            <StarsNotChecked/>
                            <span className='ml-[10px] text-[#999999]'>(10,270)</span>
                        </div>
                </div>
            </div>


        </div>
    )
}

export default Card