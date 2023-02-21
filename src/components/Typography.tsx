import React from 'react';

const Typography = () => {
  return (
    <div>
      <h1 className="font-sans">Heading 1</h1>
      <h2 className="font-serif">Heading 2</h2>
      <h3 className="font-mono">Heading 3</h3>

      <div className="text-xs">1tailwind is awesome</div>
      <div className="text-sm">2tailwind is awesome</div>
      <div className="text-base">3tailwind is awesome</div>
      <div className="text-xl">4tailwind is awesome</div>
      <div className="text-2xl">5tailwind is awesome</div>
      <div className="text-3xl">6tailwind is awesome</div>

      <div className="font-light">tailwind</div>
      <div className="font-normal">tailwind</div>
      <div className="font-medium">tailwind</div>
      <div className="font-semibold">tailwind</div>
      <div className="font-bold">tailwind</div>

      <div className="tracking-tight">tailwind</div>
      <div className="tracking-normal">tailwind</div>
      <div className="tracking-wide">tailwind</div>

      <div className="text-left">tailwind</div>
      <div className="text-center">tailwind</div>
      <div className="text-right">tailwind</div>

      <div className="uppercase hover:text-red-500 cursor-pointer">tail</div>
    </div>
  );
};

export default Typography;
