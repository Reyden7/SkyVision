import React from 'react';

const Card = ({ title, imageUrl, detailLink, price }) => {
  return (
    <div className="relative border border-gray-200  bg-neutral-800 rounded-3xl">
      <div className="relative h-0 pb-[100%] rounded-full ">
        <img
          src={imageUrl}
          className="absolute inset-0 w-full  brightness-50 h-full object-cover rounded-3xl shadow-lg shadow-black "
          alt={title}
        />
      </div>
      <div className="absolute inset-0  flex flex-col justify-center items-center text-white">
        <h3 className="  text-3xl font-signikaMedium mb-2 text-amber-400 p-10">{title}</h3>
        <a href={detailLink} className="text-amber-200 underline hover:text-amber-400 block">
          Détail
        </a>
        <hr className="border-t-2 border-neutral-950 my-2" />
        <div className="text-lg font-semibold text-amber-500">{price}</div>
      </div>
    </div>
  );
};

export default Card;
