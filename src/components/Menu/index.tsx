import { ThemeProvider } from "styled-components";
import { Nav, NavLink } from "./styleMenu";
import { mega, quina, timemania } from "../../styles/theme";

export default function Menu() {

    return (
        <Nav>
            <ThemeProvider theme={timemania}>
                <NavLink to="timemania">Timemania</NavLink>
            </ThemeProvider>
            <ThemeProvider theme={mega}>
                <NavLink to="megasena">Megasena</NavLink>
            </ThemeProvider>
            <ThemeProvider theme={quina}>
                <NavLink to="quina">Quina</NavLink>
            </ThemeProvider>
        </Nav>
    )
}