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
                    1. Introduction
                  </li>
                  <li
                    onClick={scrollToSection2}
                    style={{
                      color:
                        currentElementIndexInViewport === 1 ? "red" : "black",
                    }}
                    className="hover:bg-base-200 p-3 rounded-sm"
                  >
                    2. Token Information
                  </li>
                  <li
                    onClick={scrollToSection3}
                    style={{
                      color:
                        currentElementIndexInViewport === 2 ? "red" : "black",
                    }}
                    className="hover:bg-base-200 p-3 rounded-sm"
                  >
                    3. Technology
                  </li>
                  <li
                    onClick={scrollToSection4}
                    style={{
                      color:
                        currentElementIndexInViewport === 3 ? "red" : "black",
                    }}
                    className="hover:bg-base-200 p-3 rounded-sm"
                  >
                    4. Ecosystem & 5. Roadmap
                  </li>
                  <li
                    onClick={scrollToSection5}
                    style={{
                      color:
                        currentElementIndexInViewport === 4 ? "red" : "black",
                    }}
                    className="hover:bg-base-200 p-3 rounded-sm"
                  >
                    6. Conclusion
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
                1 Introduction
              </h2>
              <h3 className="font-bold text-xl">
                1.1 Project Overview
              </h3>
              <p>
              Juice Meme Token (JMT) is an entertainment-focused meme token designed to 
provide its community with a fun and interactive experience. By leveraging the power of meme culture in the crypto space, we aim to 
create a platform where users can engage and express their creativity.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                1.2 Vision and Mission:
              </h3>
              <p>
              To celebrate meme culture and encourage community participation.
              Mission: To create a user-friendly, fun, and interactive ecosystem that positions JMT as the world’s most popular meme token.
              </p>
            </div>
            {/* <div className="space-y-3">
              <h3 className="font-bold text-xl">
                1.3 Core Project Values: Healthy Investment, Healthy Life
              </h3>
              <p>
                $JUICE goes beyond a simple meme token, contributing to the
                wellbeing of coin investors worldwide as the world's first
                healthcare meme coin project.
              </p>
            </div> */}
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 ref={section2Ref} className="font-bold text-3xl">
                2 Token Information
              </h2>
              <h3 className="font-bold text-xl">
                2.1 Token Features
              </h3>
              <p className="pl-6">
                <li> Name: Juice Meme Token</li>
                <li> Symbol: JMT</li>
                <li>Total Supply: 1,000,0000 JMT</li>
                <li> Standard: SOL </li>
              </p>
            </div>
            <div className="space-y-3">
              
              <h3 className="font-bold text-xl">
                2.2 Distribution
              </h3>
              <p className="pl-6">
                <li>Community: 50%</li>
                <li>Development Team: 20%</li>
                <li>Marketing and Partnerships: 15%</li>
                <li>Reserve: 10%</li>
                <li>Rewards and Incentives: 5%</li>
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
                3 Technology
              </h2>
              <h3 className="font-bold text-xl">
                3.1 Smart Contracts
              </h3>
              <p>
              JMT operates as an SOL token on the SOLANA blockchain, ensuring a secure 
              and transparent structure. Smart contracts automate token transfers and community interactions.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                3.2 Security
              </h3>
              <p>
              To ensure project security, smart contracts will undergo independent audits. Additionally,
              there will be quick responses to any security vulnerabilities reported by the community.
              </p>
            </div>
            {/* <div className="space-y-3">
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
            </div> */}
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 ref={section4Ref} className="font-bold text-3xl">
                4 Ecosystem
              </h2>
              <h3 className="font-bold text-xl">
                4.1 Community Engagement
              </h3>
              <p>
              Users can participate in meme creation contests, polls, and events using JMT, making them a vital part of the community.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                4.2 Collaborations
              </h3>
              <p>
              We aim to increase JMT's visibility through partnerships with meme artists, influencers, and other projects.
              </p>
            </div>
            {/* <div className="space-y-3">
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
            </div> */}
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="font-bold text-3xl">
                5 Roadmap
              </h2>
              <div>
                <h3 className="font-bold text-xl">
                  5.1 2024 Q1
                </h3>
                <h3 className="font-bold">
                Project launch 
               
                </h3>
              </div>
              <p>
              Social media and community building
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-xl">
                  5.2 2024 Q2
                </h3>
                <h3 className="font-bold">
                First meme contest
                </h3>
              </div>
              <p>
              Initial partnership agreements
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-xl">
                  5.3 2024 Q3
                </h3>
                <h3 className="font-bold">
                  Listing on exchange platforms
                </h3>
              </div>
              <p>
              Community events
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">5.2 2024 Q4</h3>
              <h3 className="font-bold">
              Addition of new features
                </h3>
              <p>
              Expansion of the ecosystem
              </p>
            </div>
            <div className="space-y-3">
              <h3 ref={section5Ref}  className="font-bold text-xl">6 Conclusion</h3>
             
              <p>
              Juice Meme Token aims to create a fun experience in the cryptocurrency world 
by establishing a community-driven ecosystem. We look forward to collaborating with our community for the growth and development of JMT 
by harnessing the power of meme culture.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                Contact and Social Media Channels
              </h3>
              <p className="pl-6">
                <ul className="list-style-none">
                  <li>
                    Website:{" "}
                    <a
                      className="text-blue-500"
                      href="https://juice-token.com"
                      target="_black"
                    >
                      https://juice-token.com
                    </a>
                  </li>
                  {/* <li>Email:</li> */}
                  <li>
                    Twitter(X):{" "}
                    <a
                      className="text-blue-500"
                      href="https://x.com/juicememetoken"
                      target="_black"
                    >
                      https://x.com/juicememetoken
                    </a>{" "}
                  </li>
                  <li>
                    Telegram:{" "}
                    <a
                      className="text-blue-500"
                      href="https://t.me/juicememetoken"
                      target="_black"
                    >
                      https://t.me/juicememetoken
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
