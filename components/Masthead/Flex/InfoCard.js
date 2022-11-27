import React from 'react'
import styles from "../../../styles/Home.module.css";
import Fade from "react-reveal/Fade"

const InfoCard = () => {

  return (
    <Fade left duration={2500}>
      <div className={styles.card}>
        <p>
          🎓BIT @
          <a href="https://kent.edu.au/" alt="Link to Kent's official site">
            {" "}
            Kent Institue Australia
          </a>{" "}
        </p>
        <p>
          📍 Currently @
          <a
            href="https://www.sydney.com/"
            alt="Link to Sydney Au's official site"
          >
            {" "}
            Sydney, Australia{" "}
          </a>
        </p>
        <p>
          💻 Work @
          <a
            href="https://www.goevie.com.au"
            alt="Link to Evie's official site"
          >
            Evie Networks
          </a>
        </p>
        <p> 🌎 Fluent in English, and Nepali.</p>
      </div>
    </Fade>
  );
}

export default InfoCard