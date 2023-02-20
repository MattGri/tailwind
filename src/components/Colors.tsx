import React from 'react';

const Colors = () => {
  return (
    <>
      <p className="text-black bg-red-300">Tailwind is awesome</p>
      <p className="text-red-500 bg-red-900">Tailwind is awesome</p>
      <p className="text-green-600 bg-green-200">Tailwind is awesome</p>
      <p className="text-blue-200 bg-green-800">Tailwind is awesome</p>

      <input
        type="text"
        className="border border-red-600 outline-none"
        placeholder="name"
      />

      <button className="border border-red-500">www</button>
    </>
  );
};

export default Colors;
