import React from "react";

const Card = ({ number, AppSvg, userName, followsSubsNum, followsSubsText }) => {
  let textColor = "";
  let svgIcon = null;

  if (number >= 100) {
    textColor = "text-green-500";
    svgIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
        <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z" />
      </svg>
    );
  } else if (number >= 0 && number < 100) {
    textColor = "text-white";
    svgIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
        <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z" />
      </svg>
    );
  } else {
    textColor = "text-red-500";
    svgIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
        <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z" />
      </svg>
    );
  }

  return (
    <div>
      <div>
        {AppSvg}
        <p>{userName}</p>
      </div>
      <h1>{followsSubsNum}</h1>
      <p>{followsSubsText}</p>
      <div className={`flex items-center ${textColor}`}>
        {svgIcon}
        <span className="mr-2">&nbsp;{number}&nbsp;Today</span>
      </div>
    </div>
  );
};

export default Card;
