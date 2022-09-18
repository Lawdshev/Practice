import React from 'react';
import ActivityComp from './Activity-comp';

function Dashboard() {
  return (
    <div className='dashboard-container'>
        <div className="profile-board">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
            <i class="fa-solid fa-bell"></i>
            <span className="prof-img"></span>

        </div>
        <div className="popular-activities">
            <h1>Popular Activities</h1>
            <ActivityComp/>
        </div>
        
    </div>
  )
}

export default Dashboard;