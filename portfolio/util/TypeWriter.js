import React from "react";
import Typewriter from "typewriter-effect";
import data from "../static/data";

const TypeWriterEffect = () => {
  return (

      <Typewriter
        options={{
          strings: "I am a Data Analayst at Hungry Jack's® Pty Ltd, and I am passionate about building stuff with JavaScript.",
          autoStart: true,
          loop: false,
        }}
      />

  );
};

export default TypeWriterEffect;
