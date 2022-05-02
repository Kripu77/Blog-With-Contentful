import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hi 👋 I&apos;m Kripu Khadka </title>
        <meta name="description" content="Kripu Khadka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <h1 className={styles.navheader}>kripukhadka</h1>
      </nav>
      <main className={styles.main}>
        <Image
          src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1651489023/imageC_cpuqkl.jpg"
          width={419}
          height={374}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,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"
          className={styles.demoimage}
          alt="main image"
        ></Image>
        <h1 className={styles.title}>Namaste, 👋 I&apos;m Kripu Khadka!</h1>
        <p className={styles.description}>
          I am a Data Analayst at{" "}
          <a href="https://www.hungryjacks.com.au" className={styles.titlea}>
            Hungry Jack&apos;s® Pty Ltd
          </a>{" "}
          and I love working with JavaScript❤️.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p>
              🎓BIT @<a href="https://kent.edu.au/"> Kent Institue Australia</a>{" "}
            </p>
            <p>
              📍 Currently @
              <a href="https://www.sydney.com/"> Sydney, Australia </a>
            </p>
            <p>
              💻 Work. @
              <a href="https://www.hungryjacks.com.au">
                Hungry Jack&apos;s® Pty Ltd
              </a>
            </p>
            <p> 🌎 Speaks English, and Nepali.</p>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1651489646/bud_cfl4hs.avif"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
              width={458}
              height={388}
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
