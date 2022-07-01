import Link from "next/link";
import styles from "../../styles/Home.module.css";


const RecentBlogs = ({ posts }) => {
  return (
    <section>
      {posts.map((singlePost) => {
        const { title, publishDate, tags, description, slug } = singlePost;

        return (
          <section className={styles.blogContainer} key={slug}>
            <h1 className={styles.blogHeader}>{title}</h1>
            <p>{publishDate}</p>
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
