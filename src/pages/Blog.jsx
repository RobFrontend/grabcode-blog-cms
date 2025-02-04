import BlogArticles from "../features/articles/BlogArticles";
import Heading from "../ui/Heading";

function Blog() {
  return (
    <>
      <Heading as="h1">Witaj na moim blogu 📚</Heading>
      <BlogArticles />
    </>
  );
}

export default Blog;
