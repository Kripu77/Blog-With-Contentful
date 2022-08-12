import React from 'react'
import {motion} from "framer-motion";
import styles from "../../styles/Home.module.css";

const MhDescription = () => {

const nameVariant ={
    hidden:{
        opacity:0, 
    },
    visible:{
       
        opacity:1, transition:{
            default:{duration:1},

        } 
}
}

  //about me fadein

  const aboutVariant = {
    hidden: {
      opacity: 0,
    
    },
    visible: {
      opacity: 1,
 
      transition: {
        default: { duration: 2.5},
        type: "spring",
        stiffness: 2,
      },
    },
  };

  return (
    <section>
      <motion.h1
        variants={nameVariant}
        initial="hidden"
        animate="visible"
        className={styles.title}
      >
        Hi,<span className={styles.handmove}>👋</span> I&apos;m Kripu Khadka!
      </motion.h1>
      <motion.p className={styles.description} variants={aboutVariant} initial="hidden" animate="visible">
        I am a Data Analayst at{" "}
        <a
          href="https://www.hungryjacks.com.au"
          alt="Link to HJ's official site"
          className={styles.titlea}
        >
          Hungry Jack&apos;s® Pty Ltd,
        </a>{" "}
        and I am passionate about building stuff with JavaScript.
      </motion.p>
    </section>
  );
}

export default MhDescription