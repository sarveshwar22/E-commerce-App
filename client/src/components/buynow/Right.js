import React from 'react'

const Right = () => {
  return (
    <div className="right-buy">
        <div className="cost_right">
            <p>Your cost is eligible for FREE delivery</p>
            <span style={{color:"#565959"}}>Select this option at checkout</span>
            <h3>Subtotal (1 items) :<span style={{fontWeight:700}}>Rs 4049</span></h3>
            <button className='rightbuy_btn'>Proceed to Buy</button>
            <div className="emi">
                EMI available
            </div>
        </div>
    </div>
  )
}

export default Right