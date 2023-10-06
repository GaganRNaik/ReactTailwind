import React from 'react'
import ML from "../Assets/ML.jpg"
const Imagesec = () => {
    
  return (
    <>
      <div className="max-w-[1240px] h-[500px]  mx-auto p-4 md:grid grid-cols-2">
        <div className="md:w-[80%]  text-center ">
          <img src={ML} alt="ml"  className="h-full inline mb-2" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold pb-5">LEARN FROM EXPERTS</p>
          <p className="pb-5 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-black p-4 rounded text-white w-[30%] ">
            Get started
          </button>
        </div>
      </div>
    </>
  );
}

export default Imagesec