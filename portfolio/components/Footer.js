
import styles from '../styles/Home.module.css';



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 styles={styles.navheader}>&copy; Kripu Khadka </h1>

      <div className={styles.socialcard}>
        <p>
          {" "}
          <a href="https://www.linkedin.com/in/kripu-khadka-3594a7185/">
            {" "}
            Linkedin{" "}
          </a>
        </p>
        <p>
          {" "}
          <a href="https://www.instagram.com/kripu77/">Instagram</a>
        </p>
        <p>
          <a href="https://github.com/Kripu77" alt="GitHub link">
            {" "}
            Github
          </a>
        </p>
        <p>
          <a href="mailto:kripu.12345@gmail.com"> Email</a>
        </p>
      </div>
      <span className={styles.logo}>
        {" "}
        “You always pass failure on the way to success.”
      </span>
    </footer>
  );
}

export default Footer