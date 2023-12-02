import React from "react";

const PostCardTitle = (props) => {
  return (
    <div className="postingDetailContainer mb-5">
      <h1 className="text-3xl font-medium hover:text-violet-600 hover:cursor-pointer">
        {props.title}
      </h1>
    </div>
  );
};

export default PostCardTitle;
