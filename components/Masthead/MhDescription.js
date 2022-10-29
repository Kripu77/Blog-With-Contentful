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
          I am a Software Engineer{" "}
          {/* <a
            href="https://www.hungryjacks.com.au"
            alt="Link to HJ's official site"
            className={styles.titlea}
          >
            Hungry Jack&apos;s® Pty Ltd,
          </a>{" "} */}
        centered in building platforms to solve problems with code.
        </p>
      </Fade>
    </section>
  );
}

export default MhDescription