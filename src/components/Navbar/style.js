import styled from 'styled-components';

export const Container =styled.div`
height: 72px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
color: var(--botaoRosa);
font-size:12px;
font-weight: 600;
background: var(--fundo);

button{
    border-radius: 4px;
    background-color: var(--fundoInputs);
    width: 55px;
    height: 32px;
    border: none;
    color: var(--corNomes);
    font-weight: 600;
    font-size: 12px;
    :hover{
        filter: brightness(1.1);
    }

}

`;