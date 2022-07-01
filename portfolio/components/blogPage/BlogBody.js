import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { bodyImage } from "../../images/blurData";
import SEO from "../SEO";

const BlogBody = ({ singleBlog }) => {
  return (
    <section className={styles.notFoundContainer}>
      <h1 className={styles.ErrorPage}>
        {" "}
        This page is Under Construction (WIP).{" "}
      </h1>
      <Image
        src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1656409203/undraw_Development_re_g5hq_umhizn.png"
        placeholder="blur"
        blurDataURL={bodyImage}
        width={558}
        height={388}
        alt="body image undraw"
        className={styles.demoimage}
      ></Image>
      <p> Please allow me sometime till I get the blog ready....</p>
    </section>
  );
    // <section>
    //   {singleBlog.map((singlePost) => {
    //     const { title, slug, description, body, publishDate } = singlePost;

    //     return (
    //       <section key={slug} className={styles.blogPanel}>
    //         <SEO title={slug} />
    //         <h1> {title}</h1>
    //         <p>{description}</p>
    //         <p>{body}</p>
    //       </section>
    //     );
    //   })}
    // </section>
 
};

export default BlogBody;
