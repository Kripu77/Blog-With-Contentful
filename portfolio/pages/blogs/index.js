import Nav from "../../components/Nav";
import SEO from "../../components/SEO";
import Footer from "../../components/Footer";
import fetchEntries from "../../util/contentfulPosts";
import RecentBlogs from "../../components/blogPage/RecentBlogs";
import BlogMastHead from "../../components/blogPage/BlogMastHead";

const blogs = ({ posts }) => {
  return (
    <main>
      <SEO title="Blogs" />
      <BlogMastHead />
      <RecentBlogs posts={posts} />
    </main>
  );
};

export async function getStaticProps() {
  const posts = await fetchEntries();

  return {
    props: {
      posts,
    },
  };
}

export default blogs;
