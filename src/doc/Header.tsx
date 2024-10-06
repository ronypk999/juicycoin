import React, { useState } from "react";
import image from "../assets/orange.png";
import { TiThMenu } from "react-icons/ti";
import { Scrollspy } from "@makotot/ghostui";
import { useInfoContext } from "../hook/ContextHook";
const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);
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
      <div className="max-w-[1500px] mx-auto pt-3 pb-3 px-3 md:px-12 sticky z-10 top-0 bg-white">
        <div className="shadow-lg p-3 rounded-box flex items-center gap-3">
          <TiThMenu
            onClick={() => {
              setMenu(!menu);
            }}
            className="lg:hidden cursor-pointer text-3xl mx-3"
          />
          <div className="flex items-center gap-3 sm:mx-3">
            <img src={image} alt="logo" className="w-12" />
            <h1 className="text-xl sm:text-3xl font-black flex flex-col sm:flex-row items-center gap-0 sm:gap-3">
              <span className=""> The whitepaper</span>
              <div className="flex items-center gap-3">
                <span> of </span>
                <span className="text-orange-400">$Juice</span>
              </div>
            </h1>
          </div>
        </div>
        <div className={`${menu ? "" : "hidden"} lg:hidden`}>
          <Scrollspy sectionRefs={sections} offset={-50}>
            {({ currentElementIndexInViewport }) => (
              <>
                <ul
                  onClick={() => setMenu(!menu)}
                  className="list-style-none cursor-pointer pt-3"
                >
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
      </div>
    </>
  );
};

export default Header;
