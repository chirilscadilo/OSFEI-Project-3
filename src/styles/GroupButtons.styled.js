import styled from "styled-components";

export const StyledGroupButtons = styled.div`
    display: block;
    text-align: center;
    max-width: 510px;
    min-height: 50px;
    padding:10px;
    margin: 10px auto 10px auto;
    border-radius: 10px;

    button{
        color: #fff;
        background-color: ${({theme})=>theme.colors.buttons};
    }
    
`