import React from "react";

const TopCard = ({ card }) => {
  const { title, text, image } = card;
  return (
    <div className="rounded-xl relative ">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white   ">
        <p className="font-bold text-2xl px-2 pt-4">{title}</p>
        <p className="px-2">{text}</p>
        <button className="border-white bg-orange-400 text-white ml-3 px-3 py-1 rounded-2xl absolute bottom-4">
          Order Now
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full  rounded-xl object-cover"
        src={image}
        alt="/"
      />
    </div>
  );
};

export default TopCard;
