import { ThemeProvider } from "styled-components";
import { useContexto } from "../hooks";
import Principal from "../components/Principal";
import Carregando from "../components/Carregando";
import Trevo from "../assets/trevo-timemania.png"
import { timemania as timemaniaTema } from "../styles/theme";

export default function Timemania() {

    const { timemania } = useContexto()

    function isCarregado() {
        return !!timemania.numeroDoConcurso;
    }

    function renderElementos() {

        return (
            <ThemeProvider theme={timemaniaTema}>
                <Principal resultado={timemania} logo={Trevo}/>
            </ThemeProvider>
        )
    }

    function renderCarregando() {

        return (
            <Carregando isCarregando={isCarregado()}/>
        )
    }

    return (
        <>
            {isCarregado() ? renderElementos() : renderCarregando()}
        </>
    )
}