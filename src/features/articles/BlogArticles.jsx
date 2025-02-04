import styled from "styled-components";
import BlogItem from "./BlogItem";

import { useArticles } from "./useArticles";

const ArticleBox = styled.div`
  padding: 6.4rem 1.8rem;
  display: grid;
  gap: 4.8rem;
`;

function BlogArticles() {
  const { isLoading, articles } = useArticles();

  if (isLoading) return <h1>Loading</h1>;
  return (
    <ArticleBox>
      {articles
        .sort((a, b) => b.id - a.id)
        .map((article) => (
          <BlogItem article={article} key={article.id} />
        ))}
    </ArticleBox>
  );
}

export default BlogArticles;
