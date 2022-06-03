
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Nav from '../components/Nav';
import { mainImage, bodyImage } from '../images/blurData';




export default function Home() {
  return (
    <div className={styles.container}>
      <SEO title="Hi 👋 I'm Kripu Khadka " />
      <Nav />
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
        <h1 className={styles.title}>Hi, 👋 I&apos;m Kripu Khadka!</h1>
        <p className={styles.description}>
          I am a Data Analayst at{" "}
          <a
            href="https://www.hungryjacks.com.au"
            alt="Link to HJ's official site"
            className={styles.titlea}
          >
            Hungry Jack&apos;s® Pty Ltd.
          </a>{" "}
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
              src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1651492379/undraw_Programming_re_kg9v_r1ixg4.png"
              placeholder="blur"
              blurDataURL={bodyImage}
              width={458}
              height={388}
              alt="body image undraw"
            ></Image>
          </div>

          
        </div>
     
      </main>
      <Footer />
    </div>
  );
}
