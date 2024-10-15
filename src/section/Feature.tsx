import React from "react";
// import itemBg from "../assets/item-bg.png";
import orange from "../assets/orange.png";

// import charity from "../assets/feature/5.webp";

import charity3 from "../assets/feature/3.svg";

import { MdHealthAndSafety, MdWorkspacePremium } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi";
import { RiTimerFlashFill } from "react-icons/ri";
import { TbHealthRecognition } from "react-icons/tb";
import { useInfoContext } from "../hook/ContextHook";

const Feature: React.FC = () => {
  const { featureRef } = useInfoContext();
  return (
    <>
      <div className="p-12 max-w-[1400px] mx-auto">
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:mb-12 lg:-mb-12">
          <p
            style={{
              backgroundImage: `url(${itemBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="shadow-feature rotate-12 w-fit py-4 px-6 rounded-full"
          >
            You Drink it everyday
          </p>
          <p
            style={{
              backgroundImage: `url(${itemBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="shadow-feature -rotate-12 w-fit py-3 text-center px-6 rounded-full"
          >
            Is the vital component of life
            <br /> in our universe
          </p>
        </div> */}
        <div className="py-12 md:py-0 space-y-3 relative z-1">
          <div className="flex justify-center gap-3">
            <img src={orange} className="w-12 md:w-20" />
            <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
              <h1 ref={featureRef} className="text-[#2A4C75]">
              Welcome to
              </h1>
              <h1 className="text-orange-400">Juice Meme Token!</h1>
            </div>
            <img src={orange} className="w-12 md:w-20" />
          </div>
          <p className="text-[#2A4C75] max-w-lg text-center mx-auto">
          Step into the colorful world of meme culture with Juice Meme Token (JMT)! Express your creativity with our 
community, participate in exciting contests, and enjoy a fun experience. JMT is ready to change the way you interact in the digital world—every 
meme matters!
          </p>
        </div>
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-12 lg:-mt-24">
          <div className="flex flex-col-reverse md:flex-col gap-12">
            <p
              style={{
                backgroundImage: `url(${itemBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="shadow-feature -rotate-3 w-fit py-4 px-6 rounded-full"
            >
              Scarce, same as Bitcoin
            </p>
            <p
              style={{
                backgroundImage: `url(${itemBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="shadow-feature -rotate-6 w-fit py-4 px-6 rounded-full"
            >
              Tastes great when you are thirsty
            </p>
          </div>
          <div>
            <p
              style={{
                backgroundImage: `url(${itemBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="shadow-feature rotate-3 w-fit py-3 text-center px-6 rounded-full"
            >
              You definitely need some WATER <br /> after you had too much
              alcohol
            </p>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 py-12">
        {/* <div className="card shadow-feature-card-blue border-2 border-[#58b7e7]">
          <figure className="p-6">
            <img src={charity} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-[#58b7e7] uppercase font-bold">
              Charity FIRST
            </h2>
            <p>
              Global charity and research initiatives that will drive attention
              of millions of people. $WATER aims to have a net-positive impact
              on real world with the help of charity.
            </p>
          </div>
        </div> */}

        <div className="card shadow-feature-card-komla border-2 border-orange-400">
          <figure className="p-6 !justify-start">
            <MdHealthAndSafety className="text-6xl text-orange-400" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-orange-400 uppercase font-bold">
            Community Focus
            </h2>
            <p>
            JMT encourages active participation from users. With meme contests and interactive events, it unleashes the creative 
            potential of the community.
            </p>
          </div>
        </div>
        <div className="card shadow-feature-card-blue border-2 border-blue-400">
          <figure className="p-6 !justify-start">
            <GiDeliveryDrone className="text-6xl text-blue-400" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-blue-400 uppercase font-bold">
            Fun and Educational
            </h2>
            <p>
            JMT promotes the creation of entertaining content while educating users 
            about the world of cryptocurrency, providing opportunities for both fun and learning.
            </p>
          </div>
        </div>

        <div className="card shadow-feature-card-beguni border-2 border-purple-400">
          <figure className="p-6 !justify-start">
            <img src={charity3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-purple-400 uppercase font-bold">
            Secure and Transparent
            </h2>
            <p>
            Operating on the Solana blockchain, JMT offers a secure and transparent platform. Smart
            contracts ensure that user transactions are protected.
            </p>
          </div>
        </div>
        <div className="card shadow-feature-card-komla border-2 border-orange-400">
          <figure className="p-6 !justify-start">
            <MdWorkspacePremium className="text-6xl text-orange-400" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-orange-400 uppercase font-bold">
            Rewards and Incentives
            </h2>
            <p>
            Users have the chance to earn rewards for participating in events and creating content, fostering a more active community.
            </p>
          </div>
        </div>

        <div className="card shadow-feature-card-blue border-2 border-blue-400">
          <figure className="p-6 !justify-start">
            <RiTimerFlashFill className="text-6xl text-blue-400" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-blue-400 uppercase font-bold">
            Innovative Partnerships
            </h2>
            <p>
            JMT actively seeks collaborations with meme artists, influencers, and other projects, enhancing visibility and 
            expanding the ecosystem.
            </p>
          </div>
        </div>
        <div className="card shadow-feature-card-beguni border-2 border-purple-400">
          <figure className="p-6 !justify-start">
            <TbHealthRecognition className="text-6xl text-purple-400" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-purple-400 uppercase font-bold">
            User-Friendly Interface
            </h2>
            <p>
            The platform is designed for ease of use, allowing both beginners and 
            experienced users to navigate and participate effortlessly in the community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
