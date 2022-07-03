import Link from "next/link";
import styles from "../../styles/Home.module.css";


const RecentBlogs = ({ posts }) => {
  return (
    <section>
      {posts.map((singlePost) => {
        const { title, date, tags, description, slug } = singlePost;

        return (
          <section className={styles.blogContainer} key={date}>
            <h1 className={styles.blogHeader}>{title}</h1>
            <h3>Date Published: {date}</h3>
            <h3>{description}</h3>
            <button>
              <Link href={`/blogs/${encodeURIComponent(slug)}`}>
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
