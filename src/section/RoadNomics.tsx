import React from "react";
import roadDesk from "../assets/RoadNomics/desk-en.png";
import roadMob from "../assets/RoadNomics/mob-en.png";
import nomDesk from "../assets/RoadNomics/bg-en.png";
import nomMob from "../assets/RoadNomics/bg-mob-en.png";
import { useInfoContext } from "../hook/ContextHook";
const RoadNomics: React.FC = () => {
  const { roadMapRef } = useInfoContext();
  return (
    <>
      <div className="py-12 space-y-12">
        <div ref={roadMapRef}></div>
        <img src={roadMob} className="w-full md:hidden" />
        <img src={roadDesk} className="w-full hidden md:block" />
        <img src={nomMob} className="w-full md:hidden" />
        <img src={nomDesk} className="w-full hidden md:block" />
      </div>
    </>
  );
};

export default RoadNomics;
