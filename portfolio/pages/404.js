
import Nav from "../components/Nav";
import { mainImage, bodyImage } from "../images/blurData";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Footer from "../components/Footer";


const NotFound = () => {
  return (
    <main >
      <Nav />
      <section className={styles.notFoundContainer}>
        <h1 className={styles.ErrorPage}>
          {" "}
          404 | The page you requested could not be found.{" "}
        </h1>
        <Image
          src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1656665645/undraw_Page_not_found_re_e9o6_hkbegl.png"
          placeholder="blur"
          blurDataURL={bodyImage}
          width={458}
          height={388}
          alt="body image undraw"
          className={styles.demoimage}
        ></Image>
        <p> Please check if you're trying to access a accessible route....</p>
      </section>
      <Footer/>
    </main>
  );
};

export default NotFound;
