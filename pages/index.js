
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Nav from '../components/Nav';
import Masthead from '../components/Masthead';

import RecentBlogs from '../components/blogPage/RecentBlogs';





export default function Home() {
  return (
    <div className={styles.container}>
      <SEO title="Hi 👋 I'm Kripu Khadka " />
   
      <Masthead />
     
    </div>
  );
}
