import { Divider } from '@mui/material'
import React from 'react'
import './BuyNow.css'
import Option from './option'
import Right from './Right'
import SubTotal from './SubTotal'

const BuyNow = () => {
  return (
    <div className="buynow_section">
        <div className="buynow_container">
            <div className="left_buy">
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className="leftbuyprice">Price</span>
                <Divider />
                
                <div className="item_container">
                    <img src="" alt="IMG" />
                    <div className="item_details">
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinc</h3>
                        <h3>Smart Watches</h3>
                        <h3 className="diffrentprice">Rs 4049.00</h3>
                        <p className='unusuall'>Usually dispatched in 7 days</p>
                        <p>Eligible for FREE shipping</p>
                        <Option />
                    </div>
                    <h3 className="item_price">Rs 4049</h3>
                </div>
                <Divider />
                <SubTotal />
            </div>
            <div className="right_buy">
                <Right />
            </div>
        </div>
    </div>
  )
}

export default BuyNow