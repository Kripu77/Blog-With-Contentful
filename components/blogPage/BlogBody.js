import React from 'react'
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { bodyImage } from "../../images/blurData";
import SEO from "../SEO";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderOptions } from "../../util/renderOptions";
import { useInView } from 'framer-motion';

//main blog compo

const BlogBody = ({ singleBlog }) => {

const ref = React.useRef(null);
const isInView = useInView(ref, {once:true})


  return (
    <section
      ref={ref}
      className={styles.blogContainer}
      style={{
        transform: isInView ? "none" : "translateY(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {singleBlog.map((singlePost) => {
        const { title, slug, description, body, date, heroImage } = singlePost;

        return (
          <section key={slug} className={styles.blogPanel}>
            <SEO title={slug} />
            <h1 className={styles.blogHeader}> {title}</h1>{" "}
            <p>Date Published: {date}</p>
            <p>{description}</p>
            <Image
              src={"https:" + heroImage.fields.file.url}
              placeholder="blur"
              blurDataURL={bodyImage}
              width={558}
              height={388}
              alt="body image undraw"
              className={styles.demoimage}
            ></Image>
            <article>{documentToReactComponents(body, renderOptions)}</article>
          </section>
        );
      })}
    </section>
  );
};

export default BlogBody;
