import React from "react";

function Authenticate() {
  return (
    <div>
      <div className=" w-full h-screen  bg-gray-800 flex flex-col justify-evenly text-[4vh]">
        <div className="bg-gray-800 flex justify-center text-white">
          <h1 className="text-[4vh]">Authenticate Yourself</h1>
        </div>
        <div className="flex justify-evenly left-0 text-white  ">
          <button className="bg-red-700 p-4 border rounded-[20px] hover:bg-red-600 hover:scale-110 transform transition-transform duration-300 ease-in-out">
            Login
          </button>
          <button className="bg-red-700 p-4 border rounded-[20px] hover:bg-red-600 hover:scale-110 transform transition-transform duration-300 ease-in-out">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;
