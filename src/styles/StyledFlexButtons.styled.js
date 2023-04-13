import styled from "styled-components";

export const StyledFlexButtons = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    max-width: 510px;
    padding:10px;
    margin: 10px auto 10px auto;
    border-radius: 10px;

    button{
        color: #fff;
        background-color: ${props =>props.changeColor? '#09a4b3': ({theme})=>theme.colors.deleteButons};
    }
    
`