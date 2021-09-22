import React, { useState } from "react"
import AccordionItem from "./AccordionItem"
import arrow from "../images/arrow.svg"
import "./accordion.css"

function Accordion() {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className='accordion-wrap'>
        <div
          className='accordion-container level-1'
          onClick={() => setShow(!show)}
        >
          <img src={arrow} alt='' />
        </div>
        {show && (
          <>
            <AccordionItem />
            <AccordionItem />
          </>
        )}
      </div>
    </>
  )
}

export default Accordion
