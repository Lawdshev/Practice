import'../css/style'
import React from 'react';
import storyImage1 from "../story-images/story-image1.jpg";
import storyImage2 from '../story-images/story-image2.jpg';

function Story() {
  return (
    <div className='story-div'>
        <div className='image-div  '>
            <img src={storyImage1}/>
        </div>
        <div className='image-div'>
            <img src={storyImage2}/>
        </div>
    </div>
  )
}

export default Story