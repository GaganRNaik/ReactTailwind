import React from 'react'

const News = () => {
  return (
    <div className=" bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between p-[120px]">
        <div className="m-2">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white text-justify">
            Want to learn I.T Skills ?
          </h1>
          <span className="text-white">
            Sign up to our newsletter and stay up to date.
          </span>
        </div>
        <div className="m-2">
          <input
            type="text"
            className="p-4 mr-2 text-slate-300 "
            placeholder="Email"
          />
          <button className="bg-black p-4 rounded text-white mt-2">
            Get started
          </button>
          <br />
          <p className="text-white">
            We care bout the protection of your data. Read <br />
            our
            <a href="#" className="text-black ml-1">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default News