import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import imageC from "../images/imageC.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hi 👋 I'm Kripu Khadka</title>
        <meta name="description" content="Kripu Khadka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <h1 className={styles.navheader}> Kripu Khadka</h1>
      </nav>
      <main className={styles.main}>
        <Image
          src={imageC}
          width={280}
          height={280}
          placeholder="blur"
          className={styles.demoimage}
        ></Image>
        <h1 className={styles.title}>Hi, 👋 I am Kripu Khadka!</h1>
        <p className={styles.description}>
          I am a Data Analayst at{" "}
          <a href="https://www.hungryjacks.com.au"> Hungry Jack's® Pty Ltd</a>{" "}
          and I love working with JavaScript❤️
        </p>
        <div className={styles.grid}>
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
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <h1>&nsbpCopyright Kripu Khadka 2022 </h1>
        Powered by <span className={styles.logo}>Next.Js</span>
      </footer>
    </div>
  );
}
