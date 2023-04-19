import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

body {
  font-size: 10px;
  min-height: 100vh;
  display: flex;
}
`;

export default GlobalStyles;
