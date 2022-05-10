
import styles from "../styles/Home.module.css";
import Link from "next/link";


const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <section>
        <Link href="./">
          <h1 className={styles.navheader}>kripukhadka ✨</h1>
        </Link>
      </section>

      <section className={styles.navlink}>
        {/* <Link href="./blogs">
          <h1> Blogs</h1>
        </Link> */}
      </section>
    </nav>
  );
}

export default Nav