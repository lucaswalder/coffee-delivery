import { createGlobalStyle } from "styled-components";
import { BACKGROUND, FONT_TEXT} from "./patterns";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body, input, text-area, button {
  ${FONT_TEXT};
  font-weight: 400;
  font-size: 1.6rem;
  --webkit-font-smoothing: antialiased;
  }

  body {
    background: ${BACKGROUND};
  }

  button {
    border: none;
    background: transparent;
  }
`;