import Menu from "../components/Menu";
import Quina from "../components/Quina";
import { useContexto } from "../hooks";

function PageQuina() {
    const { quina } = useContexto();
    return (
        <>
            {quina.numeroDoConcurso ?
                <>
                <div><Menu/></div>
                <div><Quina /></div>
                </>
                :
                <div id="carregando"> Carregando... </div>
            }
        </>
    )
}

export default PageQuina;