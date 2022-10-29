import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollheight, setScrollHeight] = useState(0);

  const progressBar = () => {
    const scrollTotal = document.documentElement.scrollTop;
    const heightWin =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${(scrollTotal / heightWin) * 100}%`;
    setScrollHeight(scroll);
  };

  //useEffect and clean up fn to clean sideeffects
  useEffect(() => {
    window.addEventListener("scroll", progressBar);

    () => window.removeEventListener("scroll", progressBar);
  }, [scrollheight]);

  const progressMainStyle = {
    height: "4px",
    background: "#00cc83",
    width: scrollheight,
  };

  return (
    <div>
      <div style={progressMainStyle} />
    </div>
  );
};

export default ProgressBar;
