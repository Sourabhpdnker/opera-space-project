//this page is for professors blood group
import React, { useState } from "react";

//data for professors
const bloodGroups = [
  { bloodgrp: "A+", massage: "You are a healthy person" },
  { bloodgrp: "B+", massage: "You have a positive outlook" },
  { bloodgrp: "AB+", massage: "You are always enthusiastic" },
  { bloodgrp: "O+", massage: "You have strong leadership skills" },
  { bloodgrp: "A-", massage: "You are a problem-solving genius" },
  { bloodgrp: "B-", massage: "You are excellent at communication" },
  { bloodgrp: "AB-", massage: "You have exceptional teamwork abilities" },
  { bloodgrp: "O-", massage: "You are adaptable to any situation" },
];

function BloodGroup() {
  const [currentBloodGroup, setCurrentBloodGroup] = useState(null);

  const displayMessage = (bloodGroup) => {
    //function for display massage
    setCurrentBloodGroup(bloodGroup);
  };

  const filteredBloodGroup = bloodGroups.filter(
    //method to filter
    (group) => group.bloodgrp === currentBloodGroup
  );
  const message =
    filteredBloodGroup.length > 0 ? filteredBloodGroup[0].massage : ""; //message for display

  return (
    <>
      <div className=" bg-[url('./assets/images/bgimg.jpg')] bg-center bg-cover flex-col justify-center px-1 flex h-screen w-screen flex-1 py-12 lg:px-8 bg-gray-100">
        <h1 className="text-4xl mt-3 font-bold font-serif text-center mb-8">
          Blood Groups
        </h1>
        <div className="bg-sky-900 font-bold text-start max-w-auto h-auto w-auto sm:my-3 my-15 mx-10 p-5 py-10 rounded-lg shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-4 lg:mx-10">
            {bloodGroups.map(
              (
                group // this map method for display different blood groups from the data
              ) => (
                <button
                  key={group.bloodgrp}
                  className="bg-cyan-500 text-black font-ibold px-auto py-4 text-center rounded-md  shadow-mdbg-blue-500 hover:bg-blue-700 font-bold px-4 focus:outline-none focus:ring focus:ring-blue-300 focus:bg-blue-700 transition-transform transform-gpu hover:scale-105 shadow-md shadow-black"
                  onClick={() => displayMessage(group.bloodgrp)}
                >
                  {group.bloodgrp}
                </button>
              )
            )}
          </div>
        </div>
        <div className="font-bold text-center w-auto max-w-auto mt-10 mx-10 my-5 p-3 rounded-xl  transition-transform transform hover:shadow-lg">
          <p className="text-black font-bold text-3xl font-sans transition-transform transform hover:scale-105">
            {message}
          </p>
        </div>
      </div>
    </>
  );
}

export default BloodGroup;
