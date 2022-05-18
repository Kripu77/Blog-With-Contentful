import Nav from "../components/Nav"
import SEO from "../components/SEO";
import styles from '../styles/Home.module.css'
import Image from "next/image";
import { mainImage } from "../images/blurData";

const blogs = () => {
  return (
    <main>
      <Nav />
      <SEO title="Blogs" />

      <section className={styles.blogTitle}>
        {/* <h1> How to work write CSV file with Node.JS? </h1>
        <Image
          src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1652863972/csv_pgxemn.jpg"
          width={419}
          height={374}
          placeholder="blur"
          blurDataURL={mainImage}
          className={styles.demoimage}
          alt="main image"
        ></Image> */}
      </section>
    </main>
  );
}

export default blogs