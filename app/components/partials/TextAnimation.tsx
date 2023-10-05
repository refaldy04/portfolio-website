"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Refaldy",
        1000,
        "Web Developer",
        1000,
        "Mobile Developer",
        1000,
        "Bug Bounty",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
