import React from "react";

import ice from "../assets/supply/org_oxidation.png";
import iceBurned from "../assets/supply/org_freeradical.png";

import { GrStakeholder } from "react-icons/gr";
import { LiaChartAreaSolid } from "react-icons/lia";
import {
  GiCash,
  GiHealthCapsule,
  GiHealthNormal,
  GiTeamIdea,
} from "react-icons/gi";
import { SiBuildkite, SiLiquibase, SiProteus } from "react-icons/si";
import { FaAdjust, FaBurn, FaRecycle } from "react-icons/fa";
const Supply: React.FC = () => {
  return (
    <>
      <div className="pt-48 md:pt-32">
        <div className="px-3">
          <h1 className="text-xl base-color sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
            Water-soluble Antioxidant Mechanism: <br />
            <span className="text-orange-400">
              $JUICE's Innovative Token Economy
            </span>
          </h1>
          <p className="base-color text-center max-w-xl mx-auto text-xl py-6">
            $JUICE introduces a unique token mechanism inspired by the
            water-soluble antioxidant principle of Vitamin C. Just as Vitamin C
            prevents oxidation and removes free radicals in a water-soluble
            environment, $JUICE tokens stably maintain value and effectively
            regulate excess supply amid market volatility.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center px-3 md:px-6">
          <div className="flex-1 space-y-3 py-8 px-6 border-2 border-[#58b7e7] rounded-box">
            <img src={ice} className="mx-auto py-6" />
            <h1 className="text-xl base-color sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase text-center">
              OXIDATION PREVENTION (STAKING)
            </h1>
            <p className="max-w-lg mx-auto base-color text-center">
              $JUICE token's oxidation prevention mechanism is implemented
              through staking. This is an innovative approach that applies the
              principle of Vitamin C preventing oxidation in a water-soluble
              environment to the token economy.
            </p>
            <div className="bg-orange-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <GrStakeholder className="text-2xl md:text-3xl text-orange-500" />
                Staking Process
              </h3>
              <div className="space-y-3">
                <p>
                  Token holders can deposit their $JUICE into a staking pool.
                  Staked tokens are locked for a certain period, during which
                  trading is restricted.
                </p>
              </div>
            </div>
            <div className="bg-green-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <LiaChartAreaSolid className="text-2xl md:text-3xl text-green-900" />
                Value Stabilization
              </h3>
              <div className="space-y-3">
                <p>
                  Staking reduces the number of tokens circulating in the
                  market, regulating supply. This mitigates drastic price
                  fluctuations, stabilizing token value.
                </p>
              </div>
            </div>
            <div className="bg-orange-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <GiCash className="text-2xl md:text-3xl text-orange-500" />
                Reward Mechanism
              </h3>
              <div className="space-y-3">
                <p>
                  Staking participants receive additional $JUICE tokens or other
                  benefits as rewards. These rewards encourage long-term holding
                  and support token value.
                </p>
              </div>
            </div>
            <div className="bg-green-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <SiProteus className="text-2xl md:text-3xl text-green-900" />
                Volatility Response
              </h3>
              <div className="space-y-3">
                <p>
                  When the market is unstable, staked tokens are protected from
                  immediate selling pressure. This is similar to how Vitamin C
                  is stably maintained in the body.
                </p>
              </div>
            </div>
            <div className="bg-orange-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <SiLiquibase className="text-2xl md:text-3xl text-orange-500" />
                Liquidity Management
              </h3>
              <div className="space-y-3">
                <p>
                  By adjusting staking periods and reward rates, the project
                  team can effectively manage liquidity according to market
                  conditions.
                </p>
              </div>
            </div>
            <div className="bg-green-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <GiTeamIdea className="text-2xl md:text-3xl text-green-900" />
                Community Participation Promotion
              </h3>
              <div className="space-y-3">
                <p>
                  Staking induces long-term project participation of token
                  holders. This contributes to the stability of the community
                  and the sustainability of the project
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-3 py-8 px-6 border-2 border-[#58b7e7] rounded-box">
            <img src={iceBurned} className="mx-auto w-32 py-6" />
            <h1 className="text-xl base-color sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase text-center">
              FREE RADICAL REMOVAL (BURNING)
            </h1>
            <p className="max-w-lg mx-auto base-color text-center">
              $JUICE token's free radical removal mechanism is implemented
              through token burning. This is an innovative approach that applies
              the principle of Vitamin C removing free radicals in the body to
              the token economy.
            </p>
            <div className="bg-blue-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <GiHealthNormal className="text-2xl md:text-3xl text-blue-500" />{" "}
                Healthcare Service Connection
              </h3>
              <div className="space-y-3">
                <p>
                  $JUICE holders can use health screenings and healthcare
                  products provided by partner companies at discounted prices.
                  In this process, payment is made with $JUICE tokens.
                </p>
              </div>
            </div>
            <div className="bg-purple-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <FaBurn className="text-2xl md:text-3xl text-purple-500" />{" "}
                Token Burning Process
              </h3>
              <div className="space-y-3">
                <p>
                  A portion of the tokens used for healthcare services is
                  automatically burned. This acts to remove excess supply of
                  tokens, just like Vitamin C removes free radicals.
                </p>
              </div>
            </div>
            <div className="bg-blue-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <FaRecycle className="text-2xl md:text-3xl text-blue-500" />{" "}
                Reinvestment Mechanism
              </h3>
              <div className="space-y-3">
                <p>
                  Another portion of the used tokens is reinvested in the
                  healthcare business. This enables continuous service
                  improvement and development of new healthcare projects.
                </p>
              </div>
            </div>
            <div className="bg-purple-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <SiBuildkite className="text-2xl md:text-3xl text-purple-500" />{" "}
                Circular Economy Construction
              </h3>
              <div className="space-y-3">
                <p>
                  A healthy token ecosystem is maintained through the circular
                  structure of token use, burning, and reinvestment. This
                  stabilizes token value and increases project sustainability.
                </p>
              </div>
            </div>
            <div className="bg-blue-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <FaAdjust className="text-2xl md:text-3xl text-blue-500" />{" "}
                Supply Adjustment
              </h3>
              <div className="space-y-3">
                <p>
                  Regular token burning decreases total supply, preventing
                  inflation. This helps maintain long-term stability of token
                  value.
                </p>
              </div>
            </div>
            <div className="bg-purple-100 p-6 rounded-box  base-color">
              <h3 className="md:text-xl font-black pb-3 uppercase flex items-center gap-3">
                <GiHealthCapsule className="text-2xl md:text-3xl text-purple-500" />{" "}
                Healthcare Accessibility Improvement
              </h3>
              <div className="space-y-3">
                <p>
                  Providing discounted services allows more people to access
                  quality healthcare. At the same time, this increases the
                  practical value of $JUICE tokens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supply;
