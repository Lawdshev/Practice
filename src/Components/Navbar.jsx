import React from 'react';
import Group from './Group';
import GroupInfo from './GroupInfo';
import {Link} from 'react-router-dom';


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
                  <Link to='/'>
                    <div className="linkitem"><i className="fa-solid fa-house"></i><span>Home</span></div>
                  </Link>
                  <Link to='/profile'>
                    <div className="linkitem"><i className="fa-solid fa-user"></i><span>My profile</span></div>
                  </Link>
                  <Link to='/message'>
                    <div className="linkitem"><i className="fa-solid fa-paper-plane"></i><span>Messages</span></div>
                  </Link>
                  <Link to='/activity'>
                    <div className="linkitem"><i className="fa-solid fa-heart"></i><span>Activity</span></div>
                  </Link>
                  <Link to='/settings'>
                    <div className="linkitem"><i className="fa-solid fa-gear"></i><span>Settings</span></div>
                  </Link>
             </div>
        </div>
        <div className='group-nav'>
             <h2 className='group-heading'>Your group</h2>
            {GroupInfo.map((info) => (
            <Group key={info.id}
                   name={info.name}
                   image={info.image} />))}
        </div>
    </div>
  )
}

export default Navbar