import styled from "styled-components";
import { useArticles } from "../articles/useArticles";
import TableArticlesList from "./TableArticlesList";
import { AttentionSeeker } from "react-awesome-reveal";

const StyledList = styled.div``;

const ArticlesTable = styled.div`
  background-color: var(--color-background);
  border-radius: var(--border-radius-lg);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1.8rem;
  row-gap: 3.2rem;
  box-shadow: var(--shadow-md);
  padding: 1.8rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 50em) {
    column-gap: 0.8rem;
    padding: 0.8rem;
  }
`;

export const IMG = styled.img`
  height: 7.5rem;
`;

function ArticlesList() {
  const { isLoading, articles } = useArticles();

  if (isLoading) return <h1>Loading</h1>;
  return (
    <StyledList>
      <ArticlesTable>
        <p>Tytuł</p>
        <p>Tekst</p>
        <p>Wydawnictwo</p>
        <p>Obrazek</p>
      </ArticlesTable>
      <ArticlesTable>
        {articles
          .sort((a, b) => b.id - a.id)
          .map((article) => (
            <TableArticlesList article={article} key={article.id} />
          ))}
      </ArticlesTable>
    </StyledList>
  );
}

export default ArticlesList;
