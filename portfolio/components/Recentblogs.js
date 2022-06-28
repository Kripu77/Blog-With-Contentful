import styles from "../styles/Home.module.css";
import Link from "next/link";

const Recentblogs = () => {
  return (
    <section className={styles.blogPanel}>
      <h1> Recent Blogs:</h1>
      <Link href="/blogs">
        <p>Integrate Smartsheet with your own Node.js Server using the Smartsheet SDK for JavaScript.</p>
      </Link>
      <Link href="/blogs">
        <p>A glance on fast-easy-csv NPM package. </p>
      </Link>
    </section>
  );
};

export default Recentblogs;
