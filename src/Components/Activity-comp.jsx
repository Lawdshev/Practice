import React from 'react'

function ActivityComp() {
  return (
    <div className='activity-container'>
        <div className="act1">
            <div className="img">
                <img src="" alt="" />
            </div>
            <div className="post">
                <span className='text1'>Disaster Donation</span>
                <span className='text2'>Emily Hofter</span>
            </div>
        </div>
        <div className="act2">
            <div className="texts">
                <span>Progress</span>
                <span>80%</span>
            </div>
            <div className="bar">
                <span className='progress'></span>
            </div>
        </div>
        <div className="act3">
            <span className="comments"></span>
            <span className="time"></span>
        </div>
    </div>
  )
}

export default ActivityComp;