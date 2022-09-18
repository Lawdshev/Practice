import React from 'react';


function Group(props) {
  return (
         <div className='group-items'>
            <div className="group">
                <img src={props.image} />
                <p className='group-name'>{props.name}</p>
            </div>
        </div>
  )
}

export default Group;