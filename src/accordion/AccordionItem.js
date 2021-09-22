import React, { useState } from "react"
import Card from "../card.js/Card"
import arrow from "../images/arrow.svg"

function AccordionItem() {
  const [subItem, setSubItem] = useState(true)
  return (
    <>
      <div className='sublevel-1'>
        <div className='subheader' onClick={() => setSubItem(!subItem)}>
          <img src={arrow} alt='' /> <span>1.Shade Selection</span>
        </div>
        {subItem && (
          <div className='subcontent'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        )}
      </div>
    </>
  )
}

export default AccordionItem
