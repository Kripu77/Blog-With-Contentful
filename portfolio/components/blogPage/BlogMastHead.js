import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { bodyImage } from "../../images/blurData";

const BlogMastHead = () => {
  return (
    <section>
      <section className={styles.blogContainer}>
        <h1 className={styles.blogTitle}> Blogs Posts</h1>

        <h3 className={styles.blogHeader}>
          {" "}
         Welcome to this side of the world, Here I try to convey some of my findings as I progress in my life. Hopefully my content can help you solve your problem for greater good.{" "}
        </h3>
        <section className={styles.BlogImageContainer}>
          {/* <Image
              src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1656667334/undraw_handcrafts_book_o5ccbg.png"
              placeholder="blur"
              blurDataURL={bodyImage}
              width={458}
              height={388}
              alt="body image undraw"
              className={styles.demoimage}
            ></Image> */}
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
