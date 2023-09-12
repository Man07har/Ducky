import React from "react";
// import "./Home.css";
function Home() {
  return (
    <div>
      <div className=" w-full h-screen  bg-gray-800 flex flex-col justify-evenly text-[4vh]">
        <input
          type="text"
          className=" m-4 border bottom-0 border-red-600 text-red-600 custom-input rounded-lg"
          placeholder="Type into nothing"
        />
      </div>
      <div></div>
    </div>
  );
}

export default Home;
