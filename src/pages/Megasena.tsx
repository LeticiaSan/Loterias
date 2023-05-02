import Megasena from "../components/Megasena";
import { useContexto } from "../hooks";
import Menu from "../components/Menu";

function PageMegasena() {
    const { megasena } = useContexto();
    return (
        <>
            {megasena.numeroDoConcurso ?
                <>
                <div><Menu/></div>
                <div> <Megasena /></div>
                </>
                :
                <div id="carregando"> Carregando... </div>
            }
        </>
    )
}

export default PageMegasena;