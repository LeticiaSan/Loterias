import { ThemeProvider } from "styled-components";
import { useContexto } from "../hooks";
import { quina as quinaTema } from "../styles/theme";
import Principal from "../components/Principal";
import Carregando from "../components/Carregando";
import Trevo from "../assets/trevo-quina.png"

export default function Quina() {

    const { quina } = useContexto()

    function isCarregado() {
        return !!quina.numeroDoConcurso;
    }

    function renderElementos() {

        return (
            <ThemeProvider theme={quinaTema}>
                <Principal resultado={quina} logo={Trevo}/>
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