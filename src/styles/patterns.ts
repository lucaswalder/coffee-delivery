import { css } from "styled-components";

export const CONTAINER = css`
  width: 100%;
  max-width: 1150px;
  padding: 0 1.5rem;
  margin: 0 auto;
`;

export const TITLE_XL = css`
  font-family: ${props => props.theme.fonts.title};
  font-size: 4.8rem;
  line-height: 130%;
  font-weight: 800;
`;

export const TITLE_L = css`
  font-family: ${props => props.theme.fonts.title};
  font-size: 3.2rem;
  line-height: 130%;
  font-weight: 800;
`;

export const TITLE_M = css`
  font-family: ${props => props.theme.fonts.title};
  font-size: 2.4rem;
  line-height: 130%;
  font-weight: 800;
`;

export const TITLE_S = css`
  font-family: ${props => props.theme.fonts.title};
  font-size: 2rem;
  line-height: 130%;
  font-weight: 700;
`;

export const TITLE_XS = css`
  font-family: ${props => props.theme.fonts.title};
  font-size: 1.8rem;
  line-height: 130%;
  font-weight: 700;
`;

export const TEXT_L = css`
  font-family: ${props => props.theme.fonts.text};
  font-size: 2rem;
  line-height: 130%;
  font-weight: 400;
`;

export const TEXT_L_BOLD = css`
  ${TEXT_L}
  font-weight: 700;
`;

export const TEXT_M = css`
  font-family: ${props => props.theme.fonts.text};
  font-size: 1.6rem;
  line-height: 130%;
  font-weight: 400;
`;

export const TEXT_M_BOLD = css`
  ${TEXT_M}
  font-weight: 700;
`;

export const TEXT_S = css`
  font-family: ${props => props.theme.fonts.text};
  font-size: 1.4rem;
  line-height: 130%;
  font-weight: 400;
`;

export const TEXT_XS = css`
  font-family: ${props => props.theme.fonts.text};
  font-size: 1.2rem;
  line-height: 130%;
  font-weight: 700;
`;

export const TAG = css`
  font-family: ${props => props.theme.fonts.text};
  font-size: 1rem;
  line-height: 130%;
  font-weight: 700;
`;

export const BUTTON_G = css`
  font-family: ${props => props.theme.fonts.text};
  font-size: 1.4rem;
  line-height: 160%;
  font-weight: 700;
`;

export const BUTTON_M = css`
  font-family: ${props => props.theme.fonts.text};
  font-size: 1.2rem;
  line-height: 160%;
  font-weight: 400;
`;

export const FONT_TEXT = css`
  font-family: ${props => props.theme.fonts.text};
`;

export const BASE_TITLE = css`
  ${props => props.theme.colors["base-title"]};
`;

export const BASE_SUBTITLE = css`
  ${props => props.theme.colors["base-subtitle"]};
`;

export const BASE_TEXT = css`
  ${props => props.theme.colors["base-text"]};
`;

export const BASE_LABEL = css`
  ${props => props.theme.colors["base-label"]};
`;

export const BASE_HOVER = css`
  ${props => props.theme.colors["base-hover"]};
`;

export const BASE_BUTTON = css`
  ${props => props.theme.colors["base-button"]};
`;

export const BASE_INPUT = css`
  ${props => props.theme.colors["base-input"]};
`;

export const BASE_CARD = css`
  ${props => props.theme.colors["base-card"]};
`;

export const BACKGROUND = css`
  ${props => props.theme.colors["background"]};
`;

export const WHITE = css`
  ${props => props.theme.colors["white"]};
`;

export const YELLOW_DARK = css`
  ${props => props.theme.colors["yellow-dark"]};
`;

export const YELLOW = css`
  ${props => props.theme.colors["yellow"]};
`;

export const YELLOW_LIGHT = css`
  ${props => props.theme.colors["yellow-light"]};
`;

export const PURPLE_DARK = css`
  ${props => props.theme.colors["purple-dark"]};
`;

export const PURPLE = css`
  ${props => props.theme.colors["purple"]};
`;

export const PURPLE_LIGHT = css`
  ${props => props.theme.colors["purple-light"]};
`;


