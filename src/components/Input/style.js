import styled from 'styled-components';
import { css } from 'styled-components';


export const Container= styled.div`
    text-align:left;
    width: 100%;
    span{color:#c53030}
    
    
    `
    


export const InputContainer= styled.div`
background:var(--fundoInputs) ;
border-radius: 10px;
border: 2px solid var(--fundoInputs);
color: var(--botaoCinzaLetras);
padding: 1rem;
width: 100%;
display: flex;
justify-content: space-between;
${(props)=>props.isErrored && css `border: #c53030 solid 1px;`}



input{
    background:transparent;
    border:none;
    color: var(--corNomes);
    font-size : 14px;
}



`


