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
                Key Features:
              </h1>
              <h1 className="text-orange-400">$Juice coin</h1>
            </div>
            <img src={orange} className="w-12 md:w-20" />
          </div>
          <p className="text-[#2A4C75] max-w-lg text-center mx-auto">
            $JUICE project injects fresh vitality into investments. Like the
            refreshing taste of orange juice, we provide new energy to your
            portfolio. Like the regenerative effects of orange peel oil, our
            innovative approach revitalizes stagnant investments. With the juice
            project, your investment will experience vitamin-rich healthy growth
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
              Healthcare Foundation
            </h2>
            <p>
              The core goal of $JUICE is to promote investors' health and
              welfare through healthcare in the crypto market. We collaborate
              with leading healthcare foundations to support healthy investment
              habits and balanced lifestyles for millions of investors.
            </p>
          </div>
        </div>
        <div className="card shadow-feature-card-blue border-2 border-blue-400">
          <figure className="p-6 !justify-start">
            <GiDeliveryDrone className="text-6xl text-blue-400" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-blue-400 uppercase font-bold">
              Flexible Token Mechanism
            </h2>
            <p>
              To respond to market volatility and reduce investor stress, we
              introduce a flexible token supply mechanism in the initial stages.
              This is like how Vitamin C maintains the body's homeostasis.
            </p>
          </div>
        </div>

        <div className="card shadow-feature-card-beguni border-2 border-purple-400">
          <figure className="p-6 !justify-start">
            <img src={charity3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-purple-400 uppercase font-bold">
              Healthy Investment Limit
            </h2>
            <p>
              To prevent financial and mental stress from excessive speculation,
              we set a maximum investment limit of 100 Solana (SOL) per wallet.
              This encourages balanced portfolio composition.
            </p>
          </div>
        </div>
        <div className="card shadow-feature-card-komla border-2 border-orange-400">
          <figure className="p-6 !justify-start">
            <MdWorkspacePremium className="text-6xl text-orange-400" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-orange-400 uppercase font-bold">
              Premium Exchange Partnerships
            </h2>
            <p>
              We have pre-arranged listing plans with major exchanges, ensuring
              high liquidity and accessibility of $JUICE. This provides
              investors with a smooth trading environment, reducing unnecessary
              stress.
            </p>
          </div>
        </div>

        <div className="card shadow-feature-card-blue border-2 border-blue-400">
          <figure className="p-6 !justify-start">
            <RiTimerFlashFill className="text-6xl text-blue-400" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-blue-400 uppercase font-bold">
              Vesting for Long-term Value Creation
            </h2>
            <p>
              Tokens of key partners and influencers are kept locked according
              to publicly verifiable vesting plans. This ensures the project's
              long-term soundness and sustainable value creation.
            </p>
          </div>
        </div>
        <div className="card shadow-feature-card-beguni border-2 border-purple-400">
          <figure className="p-6 !justify-start">
            <TbHealthRecognition className="text-6xl text-purple-400" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-purple-400 uppercase font-bold">
              With Vitamin Crypto
            </h2>
            <p>
              Boost your investment health with the immunity of Vitamin C.
              Provide resistance to market fluctuations through antioxidant
              action. Build resistance to market shocks with the immunity of
              Vitamin C.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
