import React from 'react'
import "./oportunidades.css"
import 'animate.css';

import data from '../../Pages/Home/Data.json'

import { Button } from '@nextui-org/react';





function getSize() {
    const WindowsSize = window.screen.width;
  
    if (WindowsSize <= 1280) {
      return "md";
    } else if (WindowsSize <= 1080) {
      return "xs";
  
    } else {
      return "lg";
    }
  
  
  
  }




function Oportunities() {
  return (
    <div className="discount-container animate__bounceIn">

        <article className='article-discount'>
          <h2> LAST OPORTUNITIES </h2>
          <hr />
        </article>

        <section>
          <div className="container-items-discount down">
            <div className="item ">
              <div className="left">
                <img src={data.oportunidades[0].imagen} alt="" />
              </div>
              <div className="right">
                <div className="up">

                  <h4>{data.oportunidades[0].title}</h4>
                  <p>{data.oportunidades[0].description.replaceAll("  ", "\n")}</p>

                </div>

                <div className="bottom">
                  <div className="price"><span>{data.oportunidades[2].price}</span></div>
                  <div className='btn-buy'><Button size={getSize()}>Buy</Button></div>
                </div>

              </div>

            </div>
            <div className="item bounce">
              <div className="left">
                <img src={data.oportunidades[1].imagen} alt="" />
              </div>
              <div className="right">
                <div className="up">

                  <h4>{data.oportunidades[1].title}</h4>
                  <p>{data.oportunidades[1].description.replaceAll("  ", "\n")}</p>

                </div>

                <div className="bottom">
                  <div className="price"><span>{data.oportunidades[2].price}</span></div>
                  <div className='btn-buy'><Button size={getSize()}>Buy</Button></div>
                </div>

              </div>

            </div>

          </div>
          <div className="container-items-discount ">
            <div className="item">
              <div className="left">
                <img src={data.oportunidades[2].imagen} alt="" />
              </div>
              <div className="right">
                <div className="up">

                  <h4>{data.oportunidades[2].title}</h4>
                  <p>{data.oportunidades[2].description.replaceAll("  ", "\n")}</p>

                </div>

                <div className="bottom">
                  <div className="price"><span>{data.oportunidades[2].price}</span></div>
                  <div className='btn-buy'><Button size={getSize()}>Buy</Button></div>
                </div>
              </div>

            </div>
          </div>




        </section>
      </div>

  )
}

export default Oportunities