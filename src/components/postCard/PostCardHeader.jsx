import React from 'react'

const PostCardHeader = (props) => {
  return (
    <div className="userPostingContainer flex items-center gap-2 mb-3">
      <img
        className="w-10 h-10 rounded-full"
        src={props.src}
        alt={props.alt}
      />
      <div className="postingInfoContainer">
        <p className="">{props.name}</p>
        <p>28 Nov (1 day ago)</p>
      </div>
    </div>
  );
}

export default PostCardHeader