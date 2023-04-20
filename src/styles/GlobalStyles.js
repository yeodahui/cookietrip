import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.colors.background};

  #root {
    width: 100%;
    min-height: 100vh;
    position: relative;
  }
}
`;

export default GlobalStyles;
