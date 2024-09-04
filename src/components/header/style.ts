import styled from "styled-components";
import { CONTAINER, PURPLE, PURPLE_DARK, PURPLE_LIGHT, TEXT_S } from "../../styles/patterns";

export const HeaderMain = styled.header`
  padding: 3.2rem 0;
`;

export const HeaderWrapper = styled.div`
  ${CONTAINER}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const ButtonPlace = styled.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.8rem;
    background: ${PURPLE_LIGHT};
    color: ${PURPLE_DARK};
    ${TEXT_S}
    border-radius: 0.6rem;

    svg {
      fill: ${PURPLE};
    }
`;