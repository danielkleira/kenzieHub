import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --black: #000000;
        --fundo: #212529;
        --botaoRosa: #FF577F;
        --fundoInputs: #343B41;
        --corNomes: #F8F9FA;  
        --botaoCinzaLetras: #868E96;   
    }
    
    body{
        background: var(--black);
        color: var(--corNomes);
    }

    body, input, button{
        font-family: 'Inter', sans-serif;
    }

    input{
        font-weight:400;
        font-size: 16.24px;
        color: var(--botaoCinzaLetras);
        background-color: var(--fundoInputs);
    }

    a{
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }



`