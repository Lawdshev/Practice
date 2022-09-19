import React from 'react'

function Post(props) {
  return (
    <div className='post-container'>
      <div className="img-cont">
        
      </div>
      <div className="actions">
        <div className="reactions">
            <i className="fa-solid fa-heart"></i> <span>5k</span>
        </div>
        <div className="message">
            <i class="fa-solid fa-comment-dots"></i> <i class="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
  )
}
export default Post;