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
  min-height: 100vh;
  font-size: ${({ theme }) => theme.fontSizes.base};
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};

  #root {
    width: 100%;
  }
}
`;

export default GlobalStyles;
