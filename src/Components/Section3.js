import React from 'react'
import './Section3.css'
import img2 from'../images/icon-music.svg'

const Section3 = () => {
  return (
    <div>

      
<div className='sec3div'>
          <img src={img2} alt="" />
              <div className='annual'>
            <h3>Annual plan</h3>
            <p>$59.99/year</p>

          </div>
            <p><a className='a' href="#">Change</a></p>
        </div>
         {/* <div className='section3'>
           

        </div>  */}
    </div>
  )
}

export default Section3