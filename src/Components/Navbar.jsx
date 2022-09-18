import React from 'react';

function Navbar() {
  return (
    <div className='nav-container'>
        <div className='logo'>
          <div className='logo-icon'>P</div>
            
            <h2 className='logo-heading'><span className='praco'>Praco</span><span className='gram'>gram</span></h2>
        </div>
        <div className='account-nav'>
            <h1 className='account'>Account</h1>
            <div className="navitem">
                <ul className='nav-list'>
                   <li>
                   <i className="fa-solid fa-house"></i> Home
                   </li>
                   <li>
                   <i className="fa-solid fa-user"></i> My profile
                   </li>
                   <li>
                   <i className="fa-solid fa-paper-plane"></i>Messages
                   </li>
                   <li>
                   <i className="fa-solid fa-heart"></i> Activity 
                   </li>
                   <li>
                   <i className="fa-solid fa-gear"></i> Settings
                   </li>
                </ul>
            </div>
        </div>
        <div className='group-nav'>
            
        </div>
    </div>
  )
}

export default Navbar