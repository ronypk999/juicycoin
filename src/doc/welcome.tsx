import React from "react";
import { Scrollspy } from "@makotot/ghostui";
import { useInfoContext } from "../hook/ContextHook";
const Welcome: React.FC = () => {
  const {
    section1Ref,
    section2Ref,
    section3Ref,
    section4Ref,
    section5Ref,
    scrollToSection1,
    scrollToSection2,
    scrollToSection3,
    scrollToSection4,
    scrollToSection5,
  } = useInfoContext();
  const sections = [
    section1Ref,
    section2Ref,
    section3Ref,
    section4Ref,
    section5Ref,
  ];
  return (
    <>
      <div className="flex max-w-[1500px] mx-auto pt-6 pb-12">
        <div className="hidden lg:block px-12">
          <Scrollspy sectionRefs={sections} offset={-50}>
            {({ currentElementIndexInViewport }) => (
              <>
                <ul className="list-style-none  cursor-pointer sticky z-10 top-32 bg-white">
                  <li
                    onClick={scrollToSection1}
                    style={{
                      color:
                        currentElementIndexInViewport === 0 ? "red" : "black",
                    }}
                    className="hover:bg-base-200 p-3 rounded-sm"
                  >
                    1. Introduction to $JUICE
                  </li>
                  <li
                    onClick={scrollToSection2}
                    style={{
                      color:
                        currentElementIndexInViewport === 1 ? "red" : "black",
                    }}
                    className="hover:bg-base-200 p-3 rounded-sm"
                  >
                    2. $JUICE Sale Details
                  </li>
                  <li
                    onClick={scrollToSection3}
                    style={{
                      color:
                        currentElementIndexInViewport === 2 ? "red" : "black",
                    }}
                    className="hover:bg-base-200 p-3 rounded-sm"
                  >
                    3. Benefits of $JUICE
                  </li>
                  <li
                    onClick={scrollToSection4}
                    style={{
                      color:
                        currentElementIndexInViewport === 3 ? "red" : "black",
                    }}
                    className="hover:bg-base-200 p-3 rounded-sm"
                  >
                    4. $JUICE Roadmap
                  </li>
                  <li
                    onClick={scrollToSection5}
                    style={{
                      color:
                        currentElementIndexInViewport === 4 ? "red" : "black",
                    }}
                    className="hover:bg-base-200 p-3 rounded-sm"
                  >
                    5. Concluding $JUICE
                  </li>
                </ul>
              </>
            )}
          </Scrollspy>
        </div>
        <div className="max-w-4xl mx-auto px-3 space-y-12 flex-1">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 ref={section1Ref} className="font-bold text-3xl">
                1 Introduction to $JUICE: Squeezing the Orange
              </h2>
              <h3 className="font-bold text-xl">
                1.1 Vision: Charging Up with Vitamins, Energizing with
                Investment
              </h3>
              <p>
                The $JUICE project injects fresh vitality into investments. Like
                the refreshing taste of orange juice, we bring new life to your
                portfolio. Similar to the rejuvenating effects of orange peel
                oil, our innovative approach revitalizes stagnant investments.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                1.2 Vitamin C(rypto) $JUICE: A New Nutrient in Cryptocurrency
              </h3>
              <p>
                Boost your investment health with the immunity of Vitamin C
                Counter market volatility through antioxidant action Protect
                investments from volatility with orange peel Provide profit
                realization opportunities through regular 'orange harvests'
                Offer abundant liquidity like 100% concentrated juice
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                1.3 Core Project Values: Healthy Investment, Healthy Life
              </h3>
              <p>
                $JUICE goes beyond a simple meme token, contributing to the
                wellbeing of coin investors worldwide as the world's first
                healthcare meme coin project.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 ref={section2Ref} className="font-bold text-3xl">
                2 $JUICE Sale Details: Freshly Squeezed Tokenomics
              </h2>
              <h3 className="font-bold text-xl">
                2.1 Total Supply: 88,888,888,888 $JUICE
              </h3>
              <p className="pl-6">
                <li> 30% Presale + Bonus</li>
                <li> 35% Liquidity/CEX/MM</li>
                <li>20% Marketing</li>
                <li> 10% Healthcare Foundation</li>
                <li> 5% Initial Contributors</li>
              </p>
            </div>
            {/* <div className="space-y-3">
              <h3 className="font-bold text-xl">2.2 Presale Information</h3>
              <h4 className="font-bold">
                The presale of $JUICE coins will proceed under the following
                conditions:
              </h4>
              <h4 className="font-bold">
                Presale Date: July 17, 2024, UTC 14:00
              </h4>
              <h4 className="font-bold">How to Participate:</h4>
              <p className="pl-6">
                <li> Visit the official website (https://juicememe.wtf)</li>
                <li>
                  {" "}
                  Official social media channels (https://t.me/juicecoinnft,
                  https://x.com/juicenft)
                </li>
                <li>
                  Transfer SOL to the Solana wallet address revealed at the
                  start of the presale Maximum Purchase Limit: 100 SOL per
                  person Minimum Purchase Amount: 0.1 SOL per person
                </li>
              </p>
            </div> */}
            {/* <div className="space-y-3">
              <h4 className="font-bold">Precautions:</h4>

              <p>
                Be sure to check the wallet address provided through official
                channels. Purchased $JUICE tokens will be distributed according
                to a set schedule.
              </p>
              <p>
                The $JUICE team is doing its best to provide fair opportunities
                to all participants. More detailed information about the presale
                will be continuously updated through the official website and
                social media channels.
              </p>
            </div> */}
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 ref={section3Ref} className="font-bold text-3xl">
                3 Benefits of $JUICE: A Revolution in a Glass of Juice
              </h2>
              <h3 className="font-bold text-xl">
                3.1 Sweet Harmony of Healthcare and Cryptocurrency
              </h3>
              <p>
                The core goal of $JUICE is to promote the health and welfare of
                investors through healthcare in the crypto market. We
                collaborate with leading healthcare foundations to support
                healthy investment habits and balanced lives for millions of
                investors.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                3.2 Water-Soluble Antioxidant Mechanism: $JUICE's Innovative
                Token Economy
              </h3>
              <p>
                $JUICE introduces a unique token mechanism inspired by the
                water-soluble antioxidant principle of Vitamin C. This is
                implemented through staking (preventing oxidation) and token
                burning (removing free radicals).
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                3.3 $JUICE Health Tracker NFT Series: Track Your Health, Reap
                Rewards
              </h3>
              <p>
                Track users' exercise, nutrition intake, and sleep patterns,
                providing additional $JUICE tokens as rewards for achieving
                health goals.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                3.4 'Squeeze Two $JUICE with One Orange' Program Through this
                program, investors can enjoy various benefits:
              </h3>
              <p className="pl-6">
                <li> Become an orange farm owner</li>
                <li>Lifetime access to comprehensive health check-ups</li>
                <li>Provision of premium massage chairs</li>
                <li> Lifetime Del Monte membership</li>
                <li> Lifetime customized multivitamin subscription</li>
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                3.5 Flexible Token Mechanism
              </h3>
              <p>
                Introduce a flexible token supply mechanism to respond to market
                volatility and reduce investor stress.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 ref={section4Ref} className="font-bold text-3xl">
                4 $JUICE Roadmap: Orange Tree Growth Stages
              </h2>
              <h3 className="font-bold text-xl">
                4.1 Orange Seed Stage: Power of the Sprout
              </h3>
              <p>
                $JUICE token launch and initial community formation Establish
                partnerships with healthcare foundations Launch 'Vitamin
                C(rypto)' branding campaign
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                4.2 Growth Stage: Nutrient Supply
              </h3>
              <p>
                DEX exchange listing and initial liquidity provision Launch
                $JUICE Health Tracker NFT series Introduce 'Water-Soluble
                Antioxidant Mechanism' staking system Start global nutrition
                research support program
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                4.3 Harvest Stage: Fresh Juice
              </h3>
              <p>
                Expand liquidity and accessibility through CEX exchange listing
                Launch 'Squeeze Two $JUICE with One Orange' reward program
                Implement token burning system linked to healthcare services
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                4.4 Juice Compression Stage: Concentrated Vitality
              </h3>
              <p>
                Expand $JUICE ecosystem (DeFi, GameFi, etc.) Host Global
                Healthcare Meme Coin Summit Introduce AI-based personalized
                health management system
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 ref={section5Ref} className="font-bold text-3xl">
                5 Conclusion: Get Rich with Vitamins, Energize with Health
              </h2>
              <div>
                <h3 className="font-bold text-xl">
                  5.1.1 Sustainable Health Innovation
                </h3>
                <h3 className="font-bold">
                  $JUICE pursues sustainable health innovation beyond a simple
                  investment tool:
                </h3>
              </div>
              <p>
                Blockchain-based health data management: Develop a decentralized
                system for safely storing and managing user health information.
                AI-based personalized health advice: AI analyzes data collected
                from $JUICE Health Tracker NFTs to provide personalized health
                advice. Decentralized health insurance system: Build a
                transparent and efficient health insurance system using
                blockchain technology.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-xl">
                  5.1.2 Global Nutrition Research Support
                </h3>
                <h3 className="font-bold">
                  $JUICE actively supports global nutrition research to
                  contribute to improving human health:
                </h3>
              </div>
              <p>
                Establish nutrition research fund: Allocate 2% of total supply
                to global nutrition research fund. Nutrition deficiency solution
                projects: Support projects to address nutrition deficiency in
                developing countries.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-xl">
                  5.1.3 Health Tech Marketing Strategy
                </h3>
                <h3 className="font-bold">
                  $JUICE spreads project value and expands user base through
                  innovative health tech marketing strategies:
                </h3>
              </div>
              <p>
                Influencer partnerships: Partner with famous influencers in
                health and wellness. Virtual Reality (VR) health experience:
                Develop VR health experience programs for $JUICE holders. Host
                global health tech conference: Organize annual $JUICE Global
                Health Tech Conference. New attempt: Launch a health management
                mobile game utilizing $JUICE tokens.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">5.2 Conclusion</h3>
              <p>
                With $JUICE, your investment will experience healthy growth full
                of vitamins. We present a new paradigm of cryptocurrency
                investment, realizing harmonious development of finance and
                health.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                5.3 Contact and Social Media Channels
              </h3>
              <p className="pl-6">
                <ul className="list-style-none">
                  <li>
                    Website:{" "}
                    <a
                      className="text-blue-500"
                      href="https://juicememe.wtf"
                      target="_black"
                    >
                      https://juicememe.wtf
                    </a>
                  </li>
                  {/* <li>Email:</li> */}
                  <li>
                    Twitter(X):{" "}
                    <a
                      className="text-blue-500"
                      href="https://x.com/juicecoinnft"
                      target="_black"
                    >
                      https://x.com/juicecoinnft
                    </a>{" "}
                  </li>
                  <li>
                    Telegram:{" "}
                    <a
                      className="text-blue-500"
                      href="https://t.me/juicecoinnft"
                      target="_black"
                    >
                      https://t.me/juicecoinnft
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
