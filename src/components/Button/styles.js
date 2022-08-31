import styled from 'styled-components';


export const Container= styled.button`
background-color: ${props=> (props.whiteSchema ? '#FF577F':'#343B41')};
color:${props=> (props.element ? '#F8F9FA': '#343B41')};
display: inline-flex;
color:white;
font-size: 16px;
align-items: center;
justify-content: center;
gap: 3px;
border: none;
height: 45px;
width:${(props) => props.width} ;
border-radius: 8px;
transition: 0.1s;

:hover{
    filter: brightness(1.1);
}

`;