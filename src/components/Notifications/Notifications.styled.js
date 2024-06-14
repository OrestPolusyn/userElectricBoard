import styled from "styled-components";

export const NotificationBtn = styled.button.attrs({ type: "button" })`
  position: relative;
  display: flex;
  margin-right: 20px;
  font-size: 18px;
  align-items: center;
  height: max-content;

  svg {
    position: relative;
    top: 2px;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    fill: var(--color-black);
  }
`;
export const NotificationNumber = styled.span`
  position: absolute;
  top: 50%;
  font-size: 13px;
  translate: 0 -48%;
  left: 10px;
  color: red;
  font-weight: var(--fw-600);
`;
