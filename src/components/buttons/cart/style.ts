import styled from "styled-components";
import { TEXT_S, WHITE, YELLOW_DARK, YELLOW_LIGHT } from "../../../styles/patterns";

export const ButtonMain = styled.button`
  width: 3.8rem;
  height: 3.8rem;
  background: ${YELLOW_LIGHT};
  border-radius: 0.6rem;
  display: grid;
  place-items: center;
  position: relative;

  span {
    position: absolute;
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    background: ${YELLOW_DARK};
    border-radius: 50%;
    ${TEXT_S}
    font-weight: 700;
    color: ${WHITE};
    top: -0.8rem;
    right: -0.8rem;
  }
`;