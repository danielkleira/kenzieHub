import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--fundo);
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  h2 {
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    color: var(--corNomes);
    margin-left: 18px;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--corNomes);
    margin-right: 18px;
  }
  :hover {
    filter: brightness(1.1);
  }
`;