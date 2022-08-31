import styled from "styled-components";

export const Container= styled.div`
font-size:12px;
font-weight: 600;
margin-top: 77px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap:30px;
color: var(--corNomes);
padding: 42px 22px 42px 22px;


h1{
    color: var(--corNomes);
    font-size: 18px;
    margin:10px;
}

h2{
    color:var(--botaoRosa)
}

h4{
    font-size: 12px;
    color: var(--botaoCinzaLetras);
    font-weight: 400;
}

p{
    color: var(--corNomes);
    font-size: 12px;
    margin:10px;
}

form{
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;
width: 100%;
max-width: 360px;
background: var(--fundo);
border-radius: 4px;
padding: 42px 22px 42px 22px;


}

header{
    color:pink;
    display: flex;
    justify-content: space-between;
    max-width:360px;
    width: 100%;

    button{
        background: var(--fundo);
        color:white;
        width: 100%;
        max-width: 67px;
        height: 32px;
        border: none;
        border-radius: 4px;
    }
}








`