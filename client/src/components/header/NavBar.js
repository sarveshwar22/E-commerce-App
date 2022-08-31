import React, { useContext } from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';

const NavBar = () => {

  const {account,setAccount} = useContext(LoginContext);
  console.log(account);
  console.log("SUCESSSSS");

  return (
    <header>
        <nav>
            <div className='left'>
                <div className='navlogo'>
                    {/* <img src='./logo_main.png' alt='TechZen' /> */}
                    <NavLink to="/" >
                        <h1>TechZen</h1>
                    </NavLink>
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
                    <NavLink to="/login">Sign In</NavLink>
                </div>    
                    
                    
                    
                
                
                <div className="cart_btn">
                
                {
                    account?<NavLink to="/buynow">
                    <Badge badgeContent={account.carts.length} color = "secondary">
                            <ShoppingCartIcon id="icon" color='white' />
                        </Badge>
                    
                    </NavLink>:<NavLink to="/login">
                <Badge badgeContent={0} color = "secondary">
                        <ShoppingCartIcon id="icon" color='white' />
                    </Badge>
                
                </NavLink>
                }
                    
                    <p>Cart</p>
                    
                </div>
                {account?
                <Avatar className='avtar'>
                {account.fname[0].toUpperCase()}
                </Avatar>:<Avatar className='avtar'>
                
                </Avatar>
                }
            </div>
        </nav>
    </header>
  )
}

export default NavBar
