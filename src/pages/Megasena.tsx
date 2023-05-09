import { ThemeProvider } from "styled-components";
import { useContexto } from "../hooks";
import { mega } from "../styles/theme";
import Principal from "../components/Principal";
import Carregando from "../components/Carregando";
import Trevo from "../assets/trevo-megasena.png"

export default function Megasena() {

    const { megasena } = useContexto()

    function isCarregado() {
        return !!megasena.numeroDoConcurso;
    }

    function renderElementos() {

        return (
            <ThemeProvider theme={mega}>
                <Principal resultado={megasena} logo={Trevo}/>
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