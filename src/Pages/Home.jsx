import React from 'react';
import Story from '../Components/Story';
function Home() {
  return (
    <div className='home'>
      <div className="home-search">
        <div className="searchicons"><input type="text" className='search' placeholder='search'/><i className=' fa fa-search'></i></div>
        <h3>Hey,Rash</h3>
      </div>
      <div className='home-trend'>
        <h2>Trending Posts Today</h2>
        <div className='storypictures'>
          <Story/>
          <div className="storybutton"><button><i className='fa-solid fa-plus'></i></button></div>
        </div>
      </div>
      <div className='home-post'>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Home;