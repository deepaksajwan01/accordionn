import React from "react"
import image from "../images/images.svg"
import all from "../images/all.svg"
import video from "../images/video.svg"
import "./filter.css"

function Filter() {
  return (
    <>
      <div className='filter-wrapper'>
        <div className='filter-container'>
          <div className='show-all icon-wrap active-filter'>
            <img src={all} alt='' />
          </div>
          <div className='show-images icon-wrap'>
            <img src={image} alt='' />
          </div>
          <div className='show-videos icon-wrap'>
            <img src={video} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
