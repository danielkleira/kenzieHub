import styled from 'styled-components';

export const Container= styled.div`
    width: 100vw;
    height: 100vw;
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    display: flex;
    justify-content: center;
`

export const Modal= styled.div`
    background-color:var(--fundoInputs);
    box-shadow: 0px 4px 40px -10px rgba(0,0,0,0.25);
    border-radius: 4px;
    gap: 50px;
    width: 369px;
    height: 379px;
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--fundo);
    
    form {
      width: 100;
      max-width: 320px;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      justify-content: space-between;
      gap: 15px;
    }
  `;

export const Header = styled.div`
  border-radius: 4px 4px 0px 0px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: var(--fundoInputs);

  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    margin-left: 20px;
  }
  p {    
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: var(--corNomes);
    margin-right: 12px;
    cursor: pointer;
  }
  
`;