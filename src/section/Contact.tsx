import React from "react";
import bg from "../assets/contact/links_background.png";
import glass from "../assets/contact/link_character.png";

import { FaTelegram, FaTwitter } from "react-icons/fa";
import { useInfoContext } from "../hook/ContextHook";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  const { whitepaperRef } = useInfoContext();

  return (
    <>
      <div className="py-12">
        <div
          ref={whitepaperRef}
          className="px-3 pb-24 max-w-sm mx-auto text-center"
        >
          <h1 className="text-xl  base-color sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
            An In-Depth Look
          </h1>
          <p className="base-color text-center max-w-xl mx-auto text-xl py-6">
            More of detailed information can also found in our Whitepaper here
          </p>
          <Link
            to="/whitepaper"
            className="btn product-shadow py-3 px-6 mx-auto w-fit bg-transparent uppercase border-4 border-black"
          >
            $JUICE WHITEPAPER
          </Link>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="rounded-box space-y-12 md:space-y-0 md:py-12 flex flex-col-reverse items-center gap-12"
        >
          <img src={glass} className="w-full max-w-[300px]" />

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <div>
                <a
                  href="https://x.com/juicecoinnft"
                  target="_black"
                  className="rounded-full text-white hover:scale-95 hover:bg-[#4672eb] shadow-water border-2 border-black hover:border-2 hover:border-black btn bg-[#4672eb] btn-md px-6"
                >
                  <div className="flex items-center gap-2">
                    <FaTwitter />
                    <span>Twitter</span>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://t.me/juicecoinnft"
                  target="_black"
                  className="rounded-full text-white hover:scale-95 hover:bg-[#4672eb] shadow-water border-2 border-black hover:border-2 hover:border-black btn bg-[#4672eb] btn-md px-6"
                >
                  <div className="flex items-center gap-2">
                    <FaTelegram />
                    <span>Telegram</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
