import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import fetchEntries from "../../util/contentfulPosts";
import styles from "../../styles/Home.module.css";
import NotFound from "../404";
import SEO from "../../components/SEO";
import BlogBody from "../../components/blogPage/BlogBody";

const singleBlog = ({ posts }) => {
  if (!posts) {
    return <NotFound />;
  }

  return (
    <div>
      <Nav />
      <BlogBody singleBlog={posts} />
      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const slug = context.params.title;
  let posts = await fetchEntries();
  posts = posts.filter((post) => {
    return post.slug == slug;
  });

  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { title: "automate-with-webhooks" } },
      { params: { title: "Smartsheet-Automation" } },
    ],
    fallback: true,
  };
}
export default singleBlog;
