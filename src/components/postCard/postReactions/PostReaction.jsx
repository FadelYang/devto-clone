import React from "react";
import LikeReaction from "./postReactionComponents/LikeReaction";
import CommentReaction from "./postReactionComponents/CommentReaction";
import MinuteReadInfo from "./postReactionComponents/MinuteReadInfo";
import SaveReaction from "./postReactionComponents/SaveReaction";

const PostReaction = () => {
  return (
    <div className="postingImpressionContainer flex gap-4">
      <LikeReaction />
      <CommentReaction />
      <MinuteReadInfo />
      <SaveReaction />
    </div>
  );
};

export default PostReaction;
