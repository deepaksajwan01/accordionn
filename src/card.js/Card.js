import React from "react"
import type from "../images/cardImg.svg"
import favorite from "../images/fav.svg"
import patient from "../images/patient.svg"
import "./card.css"

function Card() {
  return (
    <>
      <div className='card-wrapper'>
        <div className='card container'>
          <div className='card-header'>
            <div className='time-wrap'>
              <span>08:45</span>
            </div>
            <div className='card-header-icon-wrap'>
              <div className='card-type'>
                <img src={type} alt='' />
              </div>
              <div className='favorite'>
                <img src={favorite} alt='' />
              </div>
            </div>
          </div>
          <div className='card-image-wrap'>
            <img src={patient} alt='' />
          </div>
        </div>
        {/* <div className='card container '>
          <div className='card-header selected-card'>
            <div className='time-wrap'>
              <span>08:45</span>
            </div>
            <div className='card-header-icon-wrap'>
              <div className='card-type'>
                <img src={type} alt='' />
              </div>
              <div className='favorite'>
                <img src={favorite} alt='' />
              </div>
            </div>
          </div>
          <div className='card-image-wrap'>
            <img src={patient} alt='' />
          </div>
        </div> */}
        {/* <div className='card container'>
          <div className='card-header'>
            <div className='time-wrap'>
              <span>08:45</span>
            </div>
            <div className='card-header-icon-wrap'>
              <div className='card-type'>
                <img src={type} alt='' />
              </div>
              <div className='favorite'>
                <img src={favorite} alt='' />
              </div>
            </div>
          </div>
          <div className='card-image-wrap'>
            <img src={patient} alt='' />
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Card
