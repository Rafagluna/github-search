import { Outlet } from "react-router-dom";

import styled from "styled-components";

function App() {
  const Container = styled.div`
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
  `;

  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
