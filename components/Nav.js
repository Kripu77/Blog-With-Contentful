import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import ProgressBar from "./ProgressBar";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState([]);

  //to track the width of the changing screen
  const checkWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    if (width > 700) {
      setIsOpen(false);
      document.body.classList.remove("navOpen");
    }

    if (width <= 700) {
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
  
{console.log(isOpen)}
  return (
    <main className={styles.navholder}>
      <nav className={styles.mainNav}>
        <Fade>
          <main className={styles.navbar}>
            <section>
              <Link href="/">
                <h1
                  className={styles.navheader}
                  onClick={() => setIsOpen(false)}
                >
                  kripukhadka ✨
                </h1>
              </Link>
            </section>

            <section className={isOpen ? styles.navVisible : styles.navlink}>
              <section className={styles.innerLink}>
                <Link href="/blogs"  >
                  <h1 onClick={() => setIsOpen(false)}> blogs</h1>
                </Link>
                <Link href="/" >
                  <h1 onClick={() => setIsOpen(false)}> home</h1>
                </Link>
              </section>
            </section>
          </main>

          <button
            className={styles.navToggler}
            onClick={() => setIsOpen(!isOpen)}
          >
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
        </Fade>
      </nav>
      <ProgressBar />
    </main>
  );
};

export default Nav;
