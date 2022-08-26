import React from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
                <div className='navlogo'>
                    {/* <img src='./logo_main.png' alt='TechZen' /> */}
                    <h1>TechZen</h1>
                </div> 
                <div className='navSearchBar'>
                    <input type="text"/>
                    <div className="search_icon">
                        <SearchIcon />
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="nav_btn">
                    <a href="https://www.google.co.in/">Sign In</a>
                </div>    
                    
                    
                    
                
                
                <div className="cart_btn">
                    <Badge badgeContent={4} color = "secondary">
                        <ShoppingCartIcon id="icon" color='white' />
                    </Badge>
                    <p>Cart</p>
                    
                </div>
                <Avatar className='avtar'/>
            </div>
        </nav>
    </header>
  )
}

export default NavBar
