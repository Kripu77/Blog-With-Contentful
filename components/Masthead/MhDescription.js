import React from 'react'
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import styles from "../../styles/Home.module.css";

const MhDescription = () => {

  return (
    <section>
      <Zoom duration={1300}>
        <h1 className={styles.title}>
          Hi,<span className={styles.handmove}>👋</span> I&apos;m Kripu Khadka!
        </h1>
      </Zoom>

      <Fade duration={1200}  right big cascade >
        <p className={styles.description}>
        I am a <strong> Software Engineer</strong> who specializes in designing and developing platforms to solve problems through code. <br/>
       
        </p>
      </Fade>
    </section>
  );
}

export default MhDescription