import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='nav-container'>
        <div className='logo'>
            <h1 className='logo-icon'>P</h1>
            <h2 className='logo-heading'><span className='praco'>Praco</span><span className='gram'>gram</span></h2>
        </div>
        <div className='account-nav'>
            <h1 className='account'>Account</h1>
            <div className="navitem">
                <ul className='nav-list'>
                   <li>
                   <FontAwesomeIcon icon={faHome}/> Home
                   </li>
                   <li>
                   <FontAwesomeIcon icon={faUser}/> My profile
                   </li>
                   <li>
                   <FontAwesomeIcon icon={faPaperPlane}/> Messages
                   </li>
                   <li>
                   <FontAwesomeIcon icon={faHeart}/> Activity 
                   </li>
                   <li>
                   <FontAwesomeIcon icon={faCog}/> Settings
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