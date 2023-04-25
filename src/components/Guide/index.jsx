import React from 'react';

const Guide = ({ guide }) => {
  const { id, title, description, image } = guide;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 justify-center border-b-2 border-slate-600 pb-12 py-4">
      <div className="w-52 md:w-72">
        <img
          className="w-full rounded-xl h-56"
          src={`http://localhost:8000/storage/guides/${image}`}
          alt=""
        />
      </div>
      <div className="col-span-3 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold capitalize">{title}</h2>
        <p className="w-[80%] mx-auto my-2 text-gray-700 leading-8 first-letter:text-3xl first-letter:text-blue-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Guide;
