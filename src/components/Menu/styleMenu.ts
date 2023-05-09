import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    padding: 5px;
    margin-bottom: 20px;
`

export const NavLink = styled(Link)`
    font-family: "Roboto";
    font-weight: bold;
    font-size: 18px;
    text-decoration-line: none;
    margin-right: 20px;
    color: ${props => props.theme.loteria};
    &:focus {
        color: grey
    }
`