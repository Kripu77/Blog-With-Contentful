import styles from "../styles/Home.module.css";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/Ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 styles={styles.navheader}>&copy; Kripu Khadka </h1>

      <div className={styles.socialcard}>
        <p>
          {" "}
          <a href="https://www.linkedin.com/in/kripu-khadka-3594a7185/">
            {" "}
            <AiFillLinkedin />
          </a>
        </p>
        <p>
          {" "}
          <a href="https://www.instagram.com/kripu77/">
            <AiFillInstagram />
          </a>
        </p>
        <p>
          <a href="https://github.com/Kripu77" alt="GitHub link">
            {" "}
            <AiFillGithub />
          </a>
        </p>
        <p>
          <a href="mailto:kripu.12345@gmail.com">
            {" "}
            <AiOutlineMail />
          </a>
        </p>
      </div>
      <span className={styles.logo}>
        {" "}
        “You always pass failure on the way to success”
      </span>
    </footer>
  );
};

export default Footer;
