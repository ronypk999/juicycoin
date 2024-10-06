import React from "react";
import halfOrange from "../assets/half_org.png";
import favicon from "/favicon.png";

const ListingDetails: React.FC = () => {
  //update progress betweeen 0 - 100
  const ProgressNumber = 50;
  return (
    <>
      <div className="bg-[#4CB050] py-12 space-y-12 mx-3 md:mx-6 lg:mx-12 rounded-box md:rounded-b-[70px]">
        <div className="flex gap-3 sm:gap-6 md:gap-12 items-center text-center justify-center px-3">
          <img src={halfOrange} className="w-12" alt="orange" />
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-medium uppercase">
            Up to 50% bonus on presale
          </h1>
          <img src={halfOrange} className="w-12" alt="orange" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 px-3 justify-center items-center">
          <div className="flex flex-col justify-center text-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl  font-medium text-white md:text-3xl">
                +50%
              </h1>
              <img src={favicon} alt="icon" className="w-8 md:w-10" />
            </div>
            <h2 className="font-medium uppercase text-white bg-[#1D5939] rounded-lg px-6 py-1 text-xl md:text-2xl">
              Round 1
            </h2>
            <p className="font-medium uppercase text-white md:text-xl">
              2,000 Sol
            </p>
          </div>
          <div className="flex flex-col justify-center text-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl  font-medium text-white md:text-3xl">
                +40%
              </h1>
              <img src={favicon} alt="icon" className="w-8 md:w-10" />
            </div>
            <h2 className="font-medium uppercase text-white bg-[#1D5939] rounded-lg px-6 py-1 text-xl md:text-2xl">
              Round 2
            </h2>
            <p className="font-medium uppercase text-white md:text-xl">
              3,000 Sol
            </p>
          </div>
          <div className="flex flex-col justify-center text-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl  font-medium text-white md:text-3xl">
                +30%
              </h1>
              <img src={favicon} alt="icon" className="w-8 md:w-10" />
            </div>
            <h2 className="font-medium uppercase text-white bg-[#1D5939] rounded-lg px-6 py-1 text-xl md:text-2xl">
              Round 3
            </h2>
            <p className="font-medium uppercase text-white md:text-xl">
              4,000 Sol
            </p>
          </div>
          <div className="flex flex-col justify-center text-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl  font-medium text-white md:text-3xl">
                +20%
              </h1>
              <img src={favicon} alt="icon" className="w-8 md:w-10" />
            </div>
            <h2 className="font-medium uppercase text-white bg-[#1D5939] rounded-lg px-6 py-1 text-xl md:text-2xl">
              Round 4
            </h2>
            <p className="font-medium uppercase text-white md:text-xl">
              6,000 Sol
            </p>
          </div>
        </div>
        <div className="max-w-3xl px-12 mx-auto">
          <div className="mx-auto flex flex-col gap-2">
            <div className="flex h-6 w-full  items-center justify-center rounded-full bg-[#32423647]">
              <div
                style={{ width: `${ProgressNumber}%` }}
                className="transition-width mr-auto h-6 w-0 rounded-full  bg-[#1D5939] duration-500"
              ></div>
            </div>
            <div className="flex justify-between">
              <span className="text-center uppercase font-medium text-white">
                0 Sol
              </span>
              <span className="text-center uppercase font-medium text-white">
                15,000 Sol
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingDetails;
