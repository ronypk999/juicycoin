import React from "react";
import img from "../assets/more/together_juice.png";
import { useInfoContext } from "../hook/ContextHook";

const More: React.FC = () => {
  const { healthRef } = useInfoContext();
  return (
    <>
      <div className="py-12 shadow-buy rounded-box">
        <div className="px-3">
          <h1
            ref={healthRef}
            className="text-xl max-w-lg mx-auto base-color sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center"
          >
            A Lifelong Health Journey with{" "}
            <span className="text-orange-400">$JUICE</span>
          </h1>
          <p className="base-color text-center max-w-4xl mx-auto text-xl py-6">
            Health is essential at every stage of life. We have created
            innovative and healthy tokenomics for $JUICE by harnessing the power
            of the meme community. Through this, we focus on funding global
            nutrition research institutions and health promotion charities. Our
            goal is to collectively drive change to create a healthier
            investment environment by leveraging the benefits of Vitamin C.
            $JUICE is beyond a simple meme token, it's the world's first
            healthcare meme coin project contributing to improving the
            well-being of coin investors worldwide.
          </p>
        </div>
        <div>
          <img src={img} className="mx-auto" />
          <div className="flex flex-col md:flex-row gap-6 py-12 px-3 md:px-6">
            <div className="flex-1 space-y-6 text-center">
              <h1 className="text-3xl md:text-5xl text-orange-400 font-black">
                01
              </h1>
              <h1 className="text-xl md:text-3xl base-color font-black uppercase">
                Dedicated Health Promotion Wallet
              </h1>
              <p className="base-color max-w-lg mx-auto">
                For transparency, we operate a separate public wallet address
                for health-related research support and global wellness
                campaigns. This allows real-time tracking of $JUICE's health
                promotion activities and healthcare business.
              </p>
            </div>
            <div className="flex-1 space-y-6 text-center">
              <h1 className="text-3xl md:text-5xl text-orange-400 font-black">
                02
              </h1>
              <h1 className="text-xl md:text-3xl base-color font-black uppercase">
                Sustainable Health Innovation and Long-term Wellness Plans
              </h1>
              <p className="base-color max-w-lg mx-auto">
                Unlike mere speculative meme coins, $JUICE has a clear purpose
                as a healthcare meme coin. Our token supports cutting-edge
                medical research while providing programs that promote the
                physical and mental health of holders. Through $JUICE, you can
                improve your personal health while contributing to global
                healthcare development.
              </p>
            </div>
            <div className="flex-1 space-y-6 text-center">
              <h1 className="text-3xl md:text-5xl text-orange-400 font-black">
                03
              </h1>
              <h1 className="text-xl md:text-3xl base-color font-black uppercase">
                Rapid Community Growth and Innovative Health Tech Marketing
              </h1>
              <p className="base-color max-w-lg mx-auto">
                We will realize $JUICE's infinite health promotion potential by
                utilizing the latest health tech trends. By continuously
                improving our approach and developing a health-centered token
                economic model, we provide maximized synergy between
                cryptocurrency and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
