import Megasena from "../components/Megasena";
import Lotofacil from "../components/Lotofacil";
import Quina from "../components/Quina";
import { useContexto } from "../hooks";
import "../css/estilos.css";
import Menu from "../components/Menu";

function Principal() {
    const { megasena } = useContexto();
    return (
        <>
            {megasena.numeroDoConcurso ?
                <>
                <div><Menu/></div>
                </>
                :
                <div id="carregando"> Carregando... </div>
            }
        </>
    )
}

export default Principal;