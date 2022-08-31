import styled from "styled-components";

export const Container= styled.div`
font-size:15px;
font-weight: 600;
margin-top: 77px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
color: var(--corNomes);
padding: 42px 22px 42px 22px;



h1{
    color: var(--corNomes);
    font-size: 18px;
    margin:10px;
}

h2{
    color:var(--botaoRosa);
    margin-bottom: 35px;
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
background: #212529;
border-radius: 4px;
padding: 42px 22px 42px 22px;
}
`