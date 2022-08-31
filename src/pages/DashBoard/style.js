import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--fundo);
  hr {
    width: 100%;
    background: var(--fundo);
    border: 1px solid var(--fundoInputs)
  }
`;

export const ContentContainer = styled.div`
  width: calc(100vw - 12px);
  max-width: 791.73px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;