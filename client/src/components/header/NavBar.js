import React from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';



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
            <div className='right'>
            
            </div>
        </nav>
    </header>
  )
}

export default NavBar
