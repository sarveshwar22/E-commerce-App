import React from 'react'
import Banner from './Banner'
import './home.css'
import Slide from './Slide'
const mainComponent = () => {
  return (
    <div className='home_section'>
        <div className="banner_part">
            <Banner />
        </div>
        <Slide />
    </div>
  )
}

export default mainComponent
