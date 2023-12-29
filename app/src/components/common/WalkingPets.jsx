import React from "react";

import WalkingPet from "./WalkingPet";

import { dog, fox, pug, runningDog } from "../../assets/images";

const WalkingPets = () => {
  return (
    <div>
      <WalkingPet
        petSrc={fox}
        alt="Fox"
        speed={0.1}
        msBetweenFrames={20}
        width={2.5}
        bottom={-0.5}
        startPosition={80}
      />
      <WalkingPet
        petSrc={dog}
        alt="Dog"
        speed={0.1}
        msBetweenFrames={30}
        width={2.5}
        reversed={true}
        bottom={-0.5}
        startPosition={40}
      />
      <WalkingPet
        petSrc={runningDog}
        alt="Running Dog"
        speed={0.18}
        msBetweenFrames={30}
        width={2.5}
        startPosition={86}
      />
      <WalkingPet
        petSrc={pug}
        alt="Pug"
        speed={0.1}
        msBetweenFrames={30}
        width={2}
        startPosition={6}
        reversed={true}
        bottom={-0.2}
      />
    </div>
  );
};

export default WalkingPets;
