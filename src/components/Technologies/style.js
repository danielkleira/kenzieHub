import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ListContainer = styled.div`
  background-color: var(--fundoInputs);
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 4px;
  li {
    list-style: none;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 16px;
  }
  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 8px;
    margin: 0 8.5px;
  }
  li + li {
    margin-top: 0px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 47px;
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 13px;
  }
  button {
    background-color: var(--fundoInputs);
    border-radius: 3px;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    :hover {
      filter: brightness(1.1);
    }
  }
`;