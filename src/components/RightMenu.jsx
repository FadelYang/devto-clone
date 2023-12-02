import React from "react";
import RightMenuPost from "./RightMenuPost";

const RightMenu = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="border-b-2 p-5">
        <h1 className="text-xl font-bold font-sans">Active Discussion</h1>
      </div>
      <RightMenuPost />
    </div>
  );
};

export default RightMenu;
