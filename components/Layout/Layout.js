import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import BackToTop from "../Masthead/BackToTop";
import styles from "../../styles/Home.module.css"
import Nav from "../Nav";

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
