import Nav from "../Nav";
import Footer from "../Footer";
import BackToTop from "../BackToTop";
import styles from "../../styles/Home.module.css"


// layout component
const Layout = ({ children }) => {
  return (
    <main>
      <Nav />
      <section className={styles.layoutContainer}>{children}</section>
      <BackToTop/>
      <Footer />
    </main>
  );
};

export default Layout;
