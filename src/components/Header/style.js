import styled from "styled-components";

export const Container = styled.div`
  height: 118px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-weight: 700;
    font-size: 18px;
    color: var(--corNomes);
  }
  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 22px;
    color: var(--corNomes);
  }
  @media (max-width: 473px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 12px;
    justify-content: space-evenly;
  }
`;