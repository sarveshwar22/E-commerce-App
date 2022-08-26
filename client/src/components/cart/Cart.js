import { Divider } from '@mui/material'
import React from 'react'
import './cart.css'

const Cart = () => {
  return (
    <div className="cart_section">
        <div className="cart_container">
            <div className="left_cart">
                <img src="" alt="cart_img" />
                <div className="cart_btn">
                    <button className="cart_btn1">Add to Cart</button>
                    <button className="cart_btn2">Buy Now</button>
                </div>
            </div>
            <div className="right_cart">
                <h3>Fitness Gear</h3>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elitliquam, magnam?</h4>
                <Divider />
                <p className="mrp">M.R.P : Rs. 1195</p>
                <p>Deal of the Day : <span style={{color:"#B12704"}}>Rs 625</span></p>
                <p>You save : <span style={{color:"#B12704"}}>Rs 570</span></p>
                
                <div className="discount_box">
                    <h5>Discount : <span style={{color:"#111"}}>Extra 10% off</span></h5>
                    <h4>Free Delivery : <span style={{color:"#111",fontWeight:600}}>Oct 8-21</span> Details</h4>
                    <p>Fastest Delivery : <span style={{color:"#111",fontWeight:600}}>Tomorrow 11AM</span></p>
                </div>
                <p className="description">About the item <span style={{color:"#565959",fontSize:14,fontWeight:500,letterSpacing:"0.4px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui odit quidem consequuntur autem repellat doloribus inventore molestiae, a cumque recusandae nihil natus pariatur perferendis, esse repellendus, eius alias illo.</span></p>
            </div>
        </div>
    
    </div>
  )
}

export default Cart