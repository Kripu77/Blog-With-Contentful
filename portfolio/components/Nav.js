import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <section>
        <Link href="/">
          <h1 className={styles.navheader}>kripukhadka ✨</h1>
        </Link>
      </section>

      <section className={styles.navlink}>
        <Link href="/blogs">
          <h1> blogs</h1>
        </Link>
        <Link href="/">
          <h1> home</h1>
        </Link>
      </section>
      {/* <button className="navToggler"></button> */}
    </nav>
  );
};

export default Nav;
