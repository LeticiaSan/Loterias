import styled from "styled-components";

export const Dezenas = styled.td`
    border-radius: 50%;
    background-color: ${props => props.theme.bola};
    padding: 10px;
    align-items: center;
    text-align: center;
    border: ${props => props.theme.bola};
`

export const Label = styled.label`
    color: ${props => props.theme.bolafonte};
    font-size: 28px;
    font-weight: bold;
`

export const Coluna = styled.tr`
    height: 30px;
    padding-bottom: 7%;
`

export const Tabela = styled.table`
    border-spacing: 15px;
    border-collapse: separate;
    &:first-child {
        margin-left: -15px;
    }
`