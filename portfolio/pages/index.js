
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Nav from '../components/Nav';
import { mainImage, bodyImage } from '../images/blurData';
import Masthead from '../components/Masthead';




export default function Home() {
  return (
    <div className={styles.container}>
      <SEO title="Hi 👋 I'm Kripu Khadka " />
      <Nav />
      <Masthead/>
      <Footer />
    </div>
  );
}
