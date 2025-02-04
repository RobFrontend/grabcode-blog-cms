import styled from "styled-components";
import ArticleForm from "../features/panel/ArticleForm";
import ArticlesList from "../features/panel/ArticlesList";
import { useState } from "react";
import Button from "../ui/Button";
import { useUser } from "../features/login/useUser";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Zoom } from "react-awesome-reveal";

const StyledPanel = styled.article`
  display: grid;
  gap: 6.4rem;
`;

function Panel() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <StyledPanel>
      <Button size="large" variation="primary" onClick={handleOpen}>
        {isOpen ? "Zamknij formularz" : "Dodaj post"}
      </Button>

      {isOpen ? (
        <Zoom>
          <ArticleForm />
        </Zoom>
      ) : null}
      <ArticlesList />
    </StyledPanel>
  );
}

export default Panel;
