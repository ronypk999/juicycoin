import React from "react";
import logo from "../assets/key.png";
const Footer: React.FC = () => {
  return (
    <>
      <div className="py-12 space-y-3 text-center text-[#737373] px-3">
        <img src={logo} className="w-full max-w-64 mx-auto" />
        <h2 className="text-xl md:text-3xl uppercase">
          STAY VITAMINIZED AND ENERGIZED
        </h2>
        <p className="max-w-3xl mx-auto">
          Risk Warning: Cryptocurrency trading is highly speculative, involves a
          high level of risk, and may not be suitable for all investors. You
          should not speculate with capital that you cannot afford to lose as
          you may lose some or all of your invested capital. The content on this
          site should not be considered investment advice. Investing is
          inherently speculative. Investments may put your capital at risk. We
          do not allow users from these countries to participate in the presale.
          The information on this site is not available to any person in
          Afghanistan, Benin, Bhutan, China, the Crimea region, Cuba, Iran,
          Iraq, Syria, the United States, Vatican City State or any country or
          jurisdiction where such distribution or use would be contrary to local
          law or regulation.
        </p>
      </div>
    </>
  );
};

export default Footer;
