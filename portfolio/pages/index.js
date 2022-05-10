
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Nav from '../components/Nav';
import { mainImage, bodyImage } from '../images/blurData';



export default function Home() {
  return (
    <div className={styles.container}>
      <SEO />
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
            Hungry Jack&apos;s® Pty Ltd
          </a>{" "}
          and I love working with JavaScript❤️.
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
          {/* 
          
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
