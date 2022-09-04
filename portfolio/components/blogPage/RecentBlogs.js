import React from 'react'
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useInView } from "framer-motion";


const RecentBlogs = ({ posts }) => {

   const ref = React.useRef(null);
   const isInView = useInView(ref, {once:true});

  return (
    <section
     
    >
      {posts.map((singlePost) => {
        const { title, date, description, slug } = singlePost;

        return (
          <section
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 2.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className={styles.blogContainer}
            key={date}
          >
            <h1 className={styles.blogHeader}>{title}</h1>
            <h3>Date Published: {date}</h3>
            <h3>{description}</h3>
            <button>
              <Link href={`/blogs/${encodeURIComponent(slug)}`} >
                Read now →
              </Link>
            </button>
          </section>
        );
      })}
    </section>
  );
};

export default RecentBlogs;
