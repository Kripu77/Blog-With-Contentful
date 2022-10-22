import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import fetchEntries from "../../util/contentfulPosts";
import NotFound from "../404";
import BlogBody from "../../components/blogPage/BlogBody";

const singleBlog = ({ posts }) => {

  //render not found page if no blog post is obtained via provided slug
  if ( !posts || posts.length<1) {
    return <NotFound />;
  }


  return (
    <div>
      <BlogBody singleBlog={posts} />
    </div>
  );
};

//ISR

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
    revalidate:10
  };
}

//generate blog paths
export async function getStaticPaths() {

  let title = await fetchEntries();

  let slugs = title.map((post)=>{
    return {params: {title: post.slug}}
  })
 
  return {
    paths: slugs,
    fallback: true,
  };
}
export default singleBlog;
