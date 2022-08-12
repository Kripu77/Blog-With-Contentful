import React from 'react'
import styles from "../../../styles/Home.module.css";
import { useInView } from 'framer-motion';

const InfoCard = () => {

//detect when the card compo is in view port
const ref = React.useRef(null);
const isInView = useInView(ref, {once:true});

//useEffect to detect and controll the in view changes
React.useEffect(()=>{
console.log(isInView)
},[isInView])

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 2.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
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
          href="https://www.hungryjacks.com.au"
          alt="Link to HJ's official site"
        >
          Hungry Jack&apos;s® Pty Ltd
        </a>
      </p>
      <p> 🌎 Fluent in English, and Nepali.</p>
    </div>
  );
}

export default InfoCard