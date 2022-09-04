import React from 'react'
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { bodyImage } from "../../images/blurData";
import { useInView } from "framer-motion";

const BlogMastHead = () => {

  const ref = React.useRef(null);
  const isInView = useInView(ref, {once:true});


  return (
    <section>
      <section
        ref={ref}
        className={styles.blogContainer}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h1 className={styles.blogTitle}> Blog Posts</h1>

        <h3>
          {" "}
          Welcome to this side of the world, Here I try to convey some of my
          findings as I progress in my life. Hopefully my content can help you
          solve your problem for greater good.{" "}
        </h3>
        <section className={styles.BlogImageContainer}>
          <Image
            src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1656666861/undraw_handcrafts_tree_bdmlgv.png"
            placeholder="blur"
            blurDataURL={bodyImage}
            width={458}
            height={388}
            alt="body image undraw"
            className={styles.demoimage}
          ></Image>
        </section>
      </section>
    </section>
  );
};

export default BlogMastHead;
