import styles from "../styles/Home.module.css";
import { mainImage, bodyImage } from "../images/blurData";
import Image from "next/image";
const Masthead = () => {
 
 
  return (
    <main className={styles.main}>
      <Image
        src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1651489023/imageC_cpuqkl.jpg"
        width={419}
        height={374}
        placeholder="blur"
        blurDataURL={mainImage}
        className={styles.demoimage}
        alt="main image"
      ></Image>
      <h1 className={styles.title}>
        Hi,<span className={styles.handmove}>👋</span> I&apos;m Kripu Khadka!
      </h1>
      <p className={styles.description}>
        I am a Data Analayst at{" "}
        <a
          href="https://www.hungryjacks.com.au"
          alt="Link to HJ's official site"
          className={styles.titlea}
        >
          Hungry Jack&apos;s® Pty Ltd,
        </a>{" "}
        and I am passionate about building stuff with JavaScript.
      </p>
      <div className={styles.grid}>
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
              href="https://www.hungryjacks.com.au"
              alt="Link to HJ's official site"
            >
              Hungry Jack&apos;s® Pty Ltd
            </a>
          </p>
          <p> 🌎 Fluent in English, and Nepali.</p>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1659705828/hackathon_transparent_ibssnp.webp"
            placeholder="blur"
            blurDataURL={bodyImage}
            width={448}
            height={308}
            alt="body image undraw"
            className={styles.demoimage}
          ></Image>
        </div>
      </div>
    </main>
  );
};

export default Masthead;
