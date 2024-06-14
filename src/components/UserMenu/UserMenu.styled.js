import styled from "styled-components";

export const UserMenuBtn = styled.button.attrs({ type: "button" })`
  display: block;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  background-color: var(--color-white);

  svg {
    width: 100%;
    height: 100%;
    fill: var(--color-dark-400);
  }
`;
