import React from "react";
import ScanLines from "./ScanLines";
import EnergyPulse from "./EnergyPulse";
import WaveLines from "./WaveLines";

const BackgroundEffects: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <WaveLines />
        <WaveLines bottom />
        <EnergyPulse />
        <ScanLines />
      </div>
    </div>
  );
};

export default BackgroundEffects;
