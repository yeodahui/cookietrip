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
  width: 100vw;
  height: 100vh;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.base};
  background-color: ${({ theme }) => theme.colors.background};
  
  #root {
    width: 100%;
    min-height: 100vh;
    position: relative;
  }
}
`;

export default GlobalStyles;
