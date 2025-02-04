import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Headroom from "react-headroom";
import { Zoom } from "react-awesome-reveal";

const StyledAppLayout = styled.div`
  /* height: 100vh; */
  /* display: grid; */
  /* grid-template-rows: auto 1fr; */
`;

const Main = styled.main`
  height: auto;
  /* overflow-y: scroll; */
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 1.8rem;
  box-shadow: var(--shadow-sm);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Headroom>
        <Header />
      </Headroom>
      <Main>
        <Container>
          <Zoom triggerOnce>
            <Outlet />
          </Zoom>
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
