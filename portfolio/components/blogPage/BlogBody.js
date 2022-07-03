import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { bodyImage } from "../../images/blurData";
import SEO from "../SEO";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderOptions } from "../../util/renderOptions";


//main blog compo

const BlogBody = ({ singleBlog }) => {


  return (
    <section className={styles.blogContainer}>
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
