import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState([]);

  //to track the width of the changing screen
  const checkWidth = () => {
    setWidth(window.innerWidth);
  };

  //nav varaints
  const navVariant = {
    hidden:{
      opacity:0
    }, 
    visible:{
      opacity:1, transition:{
        duration:1
      }
    }
  }

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    if (width > 700) {
      setIsOpen(false);
       document.body.classList.remove("navOpen");
    }

    if (width < 700) {
      if (isOpen) {
        document.body.classList.add("navOpen");
      }
      if (!isOpen) {
        document.body.classList.remove("navOpen");
      }
    }
    //clean up function
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [width, isOpen]);

  return (
    <nav className={styles.mainNav}>
      <motion.main className={styles.navbar} variants={navVariant} initial="hidden" animate="visible">
        <section>
          <Link href="/">
            <h1 className={styles.navheader} onClick={() => setIsOpen(false)}>
              kripukhadka ✨
            </h1>
          </Link>
        </section>

        <section className={isOpen ? styles.navVisible : styles.navlink}>
          <section className={styles.innerLink}>
            <Link href="/blogs" onClick={() => setIsOpen(!isOpen)}>
              <h1> blogs</h1>
            </Link>
            <Link href="/" onClick={() => setIsOpen(!isOpen)}>
              <h1> home</h1>
            </Link>
          </section>
        </section>
      </motion.main>

      <button className={styles.navToggler} onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          className={isOpen ? styles.navTogglerfocus : ""}
        >
          <path
            d="M4 7H12M20 7H16M4 12H20M4 17H8M20 17H12"
            stroke="#2b3134"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;
