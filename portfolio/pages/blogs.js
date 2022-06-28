import Nav from "../components/Nav"
import SEO from "../components/SEO";
import styles from '../styles/Home.module.css'
import Image from "next/image";
import { bodyImage } from "../images/blurData";
import Footer from "../components/Footer";

const blogs = () => {
  return (
    <main>
      <Nav />
      <SEO title="Blogs" />

      <section className={styles.main}>
        <section className={styles.blogContainer}>
          <h1 className={styles.blogTitle}>
            {" "}
            This page is Under Construction (WIP)
          </h1>
          <Image
            src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1656409203/undraw_Development_re_g5hq_umhizn.png"
            placeholder="blur"
            blurDataURL={bodyImage}
            width={658}
            height={388}
            alt="body image undraw"
          ></Image>
          <p>The content will be published soon....</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default blogs