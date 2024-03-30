import React from "react";

const Cards = ({ values, handleClick, index }) => {
  const { name, profession, image, friends } = values;
  return (
    <div className="w-60 bg-white rounded-md overflow-hidden shadow-xl ">
      <div className="w-full h-64 bg-sky-200">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <h5 className="text-sm mt-1 font-semibold">{profession}</h5>
        <button
          onClick={() => handleClick(index)}
          className={`px-3 py-1 rounded-md ${
            friends ? "bg-green-500" : "bg-blue-500"
          } text-white font-normal mt-3`}
        >
          {friends === true ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
