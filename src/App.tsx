import { useState } from "react";
import viteLogo from "/vite.svg";
import styled from "@emotion/styled";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="" className="logo react" alt="React logo" />
        </a>
      </div>
      <TestStyled>Vite + React</TestStyled>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>
          Edit <code>src/App.tsx</code> and save to test HMR
        </h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const TestStyled = styled.div`
  display: flex;
  margin: 10rem;

  color: ${({ theme }) => theme.colors.primary};
`;

export default App;
