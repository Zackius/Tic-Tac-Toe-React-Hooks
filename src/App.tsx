import React from "react"
import styled from "styled-components"
import TicTacToe from "./Components/TicTacToe"
import "papercss/dist/paper.min.css"

const App = () => {
  return (
    <Main>
      <TicTacToe />
    </Main>
  );
}
const Main = styled.main`
display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export default App


