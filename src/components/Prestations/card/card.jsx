import React from 'react';

const Card = ({ title, imageUrl, price, id }) => {
  return (
    <div className="relative border border-gray-200  bg-neutral-800 rounded-3xl">
      <div className="relative h-0 pb-[100%] rounded-full ">
        <img
          src={imageUrl}
          className="absolute inset-0 w-full  brightness-50 h-full object-cover rounded-3xl shadow-lg shadow-black "
          alt={title}
        />
      </div>
      <div className="absolute inset-0  flex flex-col text-center  items-center text-white">
        <h3 className=" text-xl mt-5 lg:-mt-5 2xl:mt-5 md:text-3xl md:mt-10 lg:text-2xl 2xl:text-3xl lg:mt-2 3xl:mt-20 3xl:text-5xl   font-signikaMedium  text-amber-400 sm:p-10 p-2">{title}</h3>
        <a href={`/detailsPage/${id}`} className="text-amber-200 underline hover:text-amber-400 block text-xl mt-5 md:text-3xl md:mt-5 lg:text-xl lg:-mt-10 xl:mt-5 3xl:text-2xl">Détail</a>
       
        <div className="text-xl mt-2 md:text-3xl md:mt-10 lg:text-3xl lg:mt-10 3xl:mt-20 3xl:text-5xlfont-semibold text-amber-500 mb-4">{price}</div>
      </div>
    </div>
  );
};

export default Card;
