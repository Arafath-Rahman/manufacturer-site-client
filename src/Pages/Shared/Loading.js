import React from "react";

const Loading = () => {
  let circleCommonClasses = "h-4 w-4 bg-gradient-to-r from-primary to-secondary rounded-full";
  return (
    <div className="flex justify-center items-center h-80">
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
};

export default Loading;
