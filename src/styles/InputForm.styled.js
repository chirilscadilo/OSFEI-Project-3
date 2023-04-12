import styled from "styled-components";

export const StyledInputForm = styled.div`
    display: block;
    text-align: center;
    max-width: 510px;
    min-height: 50px;
    padding:10px;
    margin: 10px auto 20px auto;
    border-radius: 10px;
    background-color: ${({theme})=>theme.colors.input};

    button{
        display: block;
        text-align: center;
        max-width: 510px;
        margin: 10px auto 0 auto;
        border-radius: 10px;
        border: none;
        font-size: 16px;
        color: #fff;
        background-color: ${({theme})=>theme.colors.buttons};
    }
`