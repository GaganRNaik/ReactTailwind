import React from 'react'

const Card = () => {
  return (
    <>
      <div className="max-w-[1240px] h-[400px] mx-auto md:grid grid-cols-3 mt-4 gap-6  p-5 ">
        <div className="border p-4 rounded-md flex flex-col justify-center items-center hover:shadow-xl bg-slate-300">
          <h1 className="font-bold">ML</h1>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            cupiditate!
          </p>
        </div>
        <div className="border p-4 hover:shadow-xl rounded-md flex flex-col justify-center items-center bg-slate-300">
          <h1 className="font-bold">DATA SCIENCE</h1>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            cupiditate!
          </p>
        </div>
        <div className="bg-slate-300 border p-4 hover:shadow-2xl rounded-md flex flex-col justify-center items-center">
          <h1 className="font-bold">CLOUD</h1>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            cupiditate!
          </p>
        </div>
      </div>
    </>
  );
}

export default Card