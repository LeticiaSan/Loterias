import styled from "styled-components";

export const Div = styled.div`
    justify-content: left;
    align-items: center;
    min-width: fit-content;
`

export const Logo = styled.img`
    margin-right: 15px;
    text-align: center;
    vertical-align: middle;
`

export const Titulo = styled.h1`
    display: inline;
    text-align: center;
    color: ${props => props.theme.loteria};
    font-size: 30px;
    font-weight: bold;
    vertical-align: middle;
`