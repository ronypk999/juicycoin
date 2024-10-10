import React, { createContext, ReactNode, useRef } from "react";


export interface ContextValue {
  featureRef: React.MutableRefObject<HTMLDivElement | null>;
  whitepaperRef: React.MutableRefObject<HTMLDivElement | null>;
  healthRef: React.MutableRefObject<HTMLDivElement | null>;
  section1Ref: React.MutableRefObject<HTMLDivElement | null>;
  section2Ref: React.MutableRefObject<HTMLDivElement | null>;
  section3Ref: React.MutableRefObject<HTMLDivElement | null>;
  section4Ref: React.MutableRefObject<HTMLDivElement | null>;
  section5Ref: React.MutableRefObject<HTMLDivElement | null>;
  buyRef: React.MutableRefObject<HTMLDivElement | null>;
  roadMapRef: React.MutableRefObject<HTMLDivElement | null>;
  scrollToBuy: () => void;
  scrollToFeature: () => void;
  scrollToSection1: () => void;
  scrollToSection2: () => void;
  scrollToSection3: () => void;
  scrollToSection4: () => void;
  scrollToSection5: () => void;
  scrollToHealth: () => void;
  scrollToWhitepaper: () => void;
  scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
  scrollToTop: () => void;
  apiUrl: string;
}

interface ContextProps {
  children: ReactNode;
}
export const apiUrl = "https://juice-token.com/api.php";

export const InfoContext = createContext<ContextValue | undefined>(undefined);

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  const featureRef = useRef<HTMLDivElement>(null);
  const whitepaperRef = useRef<HTMLDivElement>(null);
  const healthRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const buyRef = useRef<HTMLDivElement>(null);
  const roadMapRef = useRef<HTMLDivElement>(null);
  const apiUrl = "https://juice-token.com/api.php";


  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
   
    if (ref.current) {
      const element = ref.current;
      const elementRect = element.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();

      const scrollToY =
        elementRect.top -
        bodyRect.top -
        (window.innerHeight / 2 - elementRect.height / 2);


        
          window.scrollTo({
            top: scrollToY,
            behavior: "smooth",
          });
       

    
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToFeature = () => {
    scrollTo(featureRef);
  };
  const scrollToBuy = () => {
    scrollTo(buyRef);
  };
  const scrollToWhitepaper = () => {
    scrollTo(whitepaperRef);
  };
  const scrollToSection1 = () => {
    scrollTo(section1Ref);
  };
  const scrollToSection2 = () => {
    scrollTo(section2Ref);
  };
  const scrollToSection3 = () => {
    scrollTo(section3Ref);
  };
  const scrollToSection4 = () => {
    scrollTo(section4Ref);
  };
  const scrollToSection5 = () => {
    scrollTo(section5Ref);
  };

  const scrollToHealth = () => {
    scrollTo(healthRef);
  };

  const dataObject: ContextValue = {
    featureRef,
    roadMapRef,
    section1Ref,
    section2Ref,
    section3Ref,
    section4Ref,
    section5Ref,
    healthRef,
    buyRef,
    scrollToBuy,
    scrollToTop,
    whitepaperRef,
    scrollToWhitepaper,
    scrollToHealth,
    scrollToFeature,
    scrollToSection1,
    scrollToSection2,
    scrollToSection3,
    scrollToSection4,
    scrollToSection5,
    scrollTo,
    apiUrl,
  };

  return (
    <InfoContext.Provider value={dataObject}>{children}</InfoContext.Provider>
  );
};

export default ContextProvider;
