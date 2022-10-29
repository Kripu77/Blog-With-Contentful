import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";

const BackToTop = () => {
  //track curr height
  const [currentHeight, setCurrentHeight] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  //handle scroll
  const handleScroll = () => {
    let height = window.scrollY;

    setCurrentHeight(height);

    if (currentHeight > 600) {
      setShowScrollButton(true);
    }
    else{
        setShowScrollButton(false);
    }
  };

  //useEffect and clean up function
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    () => window.removeEventListener("scroll", handleScroll);
  }, [currentHeight]);

  return (
    <div>
      <h1 className={styles.backBtn}>
        {showScrollButton ? "aa" : ""}
      </h1>

    
    </div>
  );
};

export default BackToTop;
