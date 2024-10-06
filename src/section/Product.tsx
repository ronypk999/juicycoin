import React from "react";
import product1 from "../assets/product/ornage_wave.png";
import product2 from "../assets/product/ornage_nft.png";
import product3 from "../assets/product/orange_antioxi.png";

const Product: React.FC = () => {
  return (
    <>
      <div className="py-12">
        <div className="px-3 py-12">
          <h1 className="text-xl base-color sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
            <span className="text-orange-400">$JUICE </span>FUTURE PRODUCTS
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-6 px-3 md:px-6">
          <div className="flex-1 card product-shadow border-2 border-black">
            <figure className="px-3 pb-6 pt-3">
              <img src={product1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title text-center  text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                Orange Wave Revolution
              </h2>
              <p className="font-medium">
                Efforts for a healthy life are constantly evolving. This is
                especially true due to the stress of modern society and
                unbalanced lifestyle habits. We aim for sustainable projects
                that provide nutrition education worldwide, support exercise
                facilities, and expand mental health programs!
              </p>
              <button className="btn my-6 product-shadow py-3 px-6 mx-auto w-fit bg-transparent uppercase border-4 border-black">
                coming soon
              </button>
            </div>
          </div>
          <div className="flex-1 card product-shadow border-2 border-black">
            <figure className="px-3 pb-6 pt-3">
              <img src={product2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title text-center  text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                $JUICE Health Tracker NFT Series
              </h2>
              <p className="font-medium">
                The $JUICE Health Tracker NFT series is an innovative way to
                practice healthy living while earning profits! It rewards people
                with healthy habits. This NFT tracks users' exercise, nutrition
                intake, sleep patterns, and provides additional $JUICE tokens as
                rewards for achieving health goals.
              </p>
              <button className="btn my-6 product-shadow py-3 px-6 mx-auto w-fit bg-transparent uppercase border-4 border-black">
                coming soon
              </button>
            </div>
          </div>
          <div className="flex-1 card product-shadow border-2 border-black">
            <figure className="px-3 pb-6 pt-3">
              <img src={product3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title text-center  text-xl md:text-3xl text-[#2a4c75] uppercase font-bold">
                $JUICE's Oxidation Prevention and Free Radical Removal
              </h2>
              <p className="font-medium">
                $JUICE introduces a token mechanism inspired by the body's
                nutrient absorption process. 'Oxidation Prevention' (a unique
                staking system that provides additional benefits to long-term
                holders) and 'Free Radical Removal' (regular token burning
                events that maintain the health of the entire ecosystem and
                provide additional rewards to holders) are part of this.
              </p>
              <button className="btn my-6 product-shadow py-3 px-6 mx-auto w-fit bg-transparent uppercase border-4 border-black">
                coming soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
